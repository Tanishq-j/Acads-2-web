import { useEffect, useRef, useState } from 'react'

function useLoadOriginalHtml() {
  const [html, setHtml] = useState('')
  useEffect(() => {
    fetch('/original.html')
      .then((res) => res.text())
      .then((text) => setHtml(text))
      .catch(() => setHtml('<div>Failed to load</div>'))
  }, [])
  return html
}

function loadExternalScriptSequential(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = src
    s.async = false
    s.onload = () => resolve()
    s.onerror = () => reject(new Error('Failed to load script: ' + src))
    document.head.appendChild(s)
  })
}

function shouldRewriteGsapUrl(url) {
  return /gsap\//i.test(url) || /cdnjs\.cloudflare\.com\/ajax\/libs\/gsap/i.test(url)
}

function rewriteToLocal(url) {
  if (url.includes('CustomEase')) return '/cdn.prod.website-files.com/gsap/3.13.0/CustomEase.min.js'
  if (url.match(/ScrollTrigger/i)) return '/cdn.prod.website-files.com/gsap/3.13.0/ScrollTrigger.min.js'
  if (url.match(/SplitText/i)) return '/cdn.prod.website-files.com/gsap/3.13.0/SplitText.min.js'
  if (shouldRewriteGsapUrl(url)) return '/cdn.prod.website-files.com/gsap/3.13.0/gsap.min.js'
  if (/jquery-3\.5\.1\.min/.test(url)) return '/d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js'
  if (/unpkg\.com\/lenis/.test(url)) return '/unpkg.com/lenis@1.1.13/dist/lenis.min.js'
  if (/unpkg\.com\/split-type/.test(url)) return '/unpkg.com/split-type@0.3.4/umd/index.min.js'
  if (/cdn\.prod\.website-files\.com\/.+\/js\/webflow\./.test(url)) {
    const fileName = url.split('/').pop()
    return `/cdn.prod.website-files.com/6824431ce2fd7f3c75768a2e/js/${fileName}`
  }
  return url
}

function isWebflowScriptUrl(url) {
  return /webflow\.[^/]+\.js$/i.test(url)
}

function isVendorUrl(url) {
  return /jquery|gsap|lenis|split-type/i.test(url)
}

async function executeScriptsSequentially(root) {
  const scripts = Array.from(root.querySelectorAll('script'))
  for (const oldScript of scripts) {
    const src = oldScript.getAttribute('src')
    if (src) {
      let toLoad = rewriteToLocal(src)
      await loadExternalScriptSequential(toLoad)
    } else {
      const inline = document.createElement('script')
      Array.from(oldScript.attributes).forEach((attr) => {
        if (attr.name !== 'src') inline.setAttribute(attr.name, attr.value)
      })
      inline.text = oldScript.text
      document.body.appendChild(inline)
    }
  }
}

export default function Legacy() {
  const html = useLoadOriginalHtml()
  const containerRef = useRef(null)

  useEffect(() => {
    if (!html || !containerRef.current) return
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')

    const htmlEl = document.documentElement
    const srcHtmlEl = doc.documentElement
    ;['data-wf-domain','data-wf-page','data-wf-site'].forEach((attr) => {
      const val = srcHtmlEl.getAttribute(attr)
      if (val) htmlEl.setAttribute(attr, val)
    })
    htmlEl.classList.add('w-mod-js')
    if ('ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch)) {
      htmlEl.classList.add('w-mod-touch')
    }

    const headAssetNodes = doc.head.querySelectorAll('link, style, meta')
    headAssetNodes.forEach((node) => {
      document.head.appendChild(node.cloneNode(true))
    })

    const headScripts = Array.from(doc.head.querySelectorAll('script'))
    const run = async () => {
      for (const s of headScripts) {
        const src = s.getAttribute('src')
        if (src && isVendorUrl(src)) {
          await loadExternalScriptSequential(rewriteToLocal(src))
        }
      }

      let bodyHtml = doc.body ? doc.body.innerHTML : ''
      bodyHtml = bodyHtml
        .replace(/\sallowfullscreen(=["'][^"']*["'])?/gi, '')
        .replace(/(\b(?:x|y|width|height|rx|ry|cx|cy|r|stroke-width|font-size)\s*=\s*")(\d+),(\d+)([a-z%]*)/gi, (_m, p1, a, b, unit) => `${p1}${a}.${b}${unit}`)
        .replace(/(\b(?:x|y|width|height|rx|ry|cx|cy|r|stroke-width|font-size)\s*=\s*')(\d+),(\d+)([a-z%]*)/gi, (_m, p1, a, b, unit) => `${p1}${a}.${b}${unit}`)

      containerRef.current.innerHTML = bodyHtml

      const fixNumericAttrs = (el) => {
        for (const attr of Array.from(el.attributes || [])) {
          const val = attr.value
          if (typeof val === 'string') {
            const fixed = val.replace(/(\d),(\d+)(em|px|rem|vh|vw|%)\b/g, (_m, a, b, unit) => `${a}.${b}${unit}`)
            if (fixed !== val) el.setAttribute(attr.name, fixed)
          }
        }
        for (const child of Array.from(el.children || [])) fixNumericAttrs(child)
      }
      fixNumericAttrs(containerRef.current)

      const embedlyIframes = containerRef.current.querySelectorAll('iframe[src*="cdn.embedly.com/widgets/media.html"]')
      embedlyIframes.forEach((old) => {
        try {
          const src = new URL(old.getAttribute('src'))
          const urlParam = src.searchParams.get('url') || ''
          const decodedUrl = decodeURIComponent(urlParam)
          const match = decodedUrl.match(/vimeo\.com\/(?:video\/)?(\d+)/)
          if (match) {
            const videoId = match[1]
            const vimeo = document.createElement('iframe')
            vimeo.src = `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&background=1&loop=1&playsinline=1`
            vimeo.setAttribute('frameborder', '0')
            vimeo.setAttribute('allow', 'autoplay; fullscreen; encrypted-media; accelerometer; gyroscope; picture-in-picture')
            vimeo.setAttribute('title', old.getAttribute('title') || 'Vimeo')
            vimeo.style.width = old.style.width || '100%'
            vimeo.style.height = old.style.height || old.getAttribute('height') || '100%'
            old.parentNode && old.parentNode.replaceChild(vimeo, old)
          }
        } catch {}
      })

      const iframes = containerRef.current.querySelectorAll('iframe')
      iframes.forEach((iframe) => {
        const allow = iframe.getAttribute('allow') || ''
        const needed = ['autoplay', 'fullscreen', 'encrypted-media', 'accelerometer', 'gyroscope', 'picture-in-picture']
        const current = new Set(allow.split(';').map((s) => s.trim()).filter(Boolean))
        needed.forEach((p) => current.add(p))
        iframe.setAttribute('allow', Array.from(current).join('; '))
        iframe.removeAttribute('allowfullscreen')
      })

      if (window.gsap && window.gsap.registerPlugin) {
        const plugins = [window.CustomEase, window.ScrollTrigger, window.SplitText].filter(Boolean)
        if (plugins.length) window.gsap.registerPlugin(...plugins)
      }

      for (const s of headScripts) {
        const src = s.getAttribute('src')
        if (src && isWebflowScriptUrl(src)) {
          await loadExternalScriptSequential(rewriteToLocal(src))
        }
      }

      await executeScriptsSequentially(containerRef.current)

      if (window.jQuery && !window.$) window.$ = window.jQuery

      try {
        if (window.Webflow && !window.__webflowInited) {
          window.__webflowInited = true
          if (typeof window.Webflow.destroy === 'function') window.Webflow.destroy()
          const init = () => {
            if (typeof window.Webflow.ready === 'function') window.Webflow.ready()
            if (window.Webflow.require) {
              const ix2 = window.Webflow.require('ix2')
              if (ix2 && typeof ix2.init === 'function') ix2.init()
            }
          }
          if (window.jQuery) {
            window.jQuery(init)
          } else {
            init()
          }
        }
      } catch {}

      try {
        if (document.readyState === 'loading') {
          document.dispatchEvent(new Event('DOMContentLoaded', { bubbles: true }))
        }
      } catch {}
      try {
        window.dispatchEvent(new Event('load'))
      } catch {}

      try {
        const lenis = window.lenis
        if (window.gsap && window.ScrollTrigger && lenis && !window.__stSynced) {
          window.__stSynced = true
          const ST = window.ScrollTrigger
          lenis.on('scroll', ST.update)
          ST.scrollerProxy(document.documentElement, {
            scrollTop(value) {
              if (arguments.length) {
                try { lenis.scrollTo(value, { immediate: true }) } catch { window.scrollTo(0, value) }
              }
              return window.scrollY || window.pageYOffset || 0
            },
            getBoundingClientRect() {
              return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
            },
            pinType: document.documentElement.style.transform ? 'transform' : 'fixed',
          })
          ST.defaults({ ease: 'power2.out' })
          setTimeout(() => ST.refresh(), 50)
        }
      } catch {}

      const forceReveal = () => {
        const pre = document.querySelector('.preloader')
        if (pre) {
          const num = pre.querySelector('.preloader_numbers')
          const bar = pre.querySelector('.preloader_progress-bar')
          if (num) num.textContent = '100'
          if (bar) bar.style.width = '100%'
          pre.style.transition = 'opacity 0.6s ease'
          pre.style.opacity = '0'
          setTimeout(() => {
            pre.style.display = 'none'
            document.body && document.body.classList.remove('no-scroll', 'lenis-stopped')
            document.body && document.body.classList.add('is-loaded')
            document.querySelectorAll('[data-w-id]').forEach((el) => {
              const s = el.getAttribute('style') || ''
              if (/opacity\s*:\s*0/.test(s)) {
                el.style.opacity = ''
              }
              if (/transform/.test(s)) {
                el.style.transform = ''
              }
            })
          }, 650)
        }
      }
      setTimeout(forceReveal, 3500)

      setTimeout(() => {
        const intro = document.querySelector('[data-section="intro"], .intro')
        if (intro) {
          try {
            if (window.gsap) {
              window.gsap.to(intro, { opacity: 0, duration: 0.6, ease: 'power2.out', onComplete: () => {
                intro.style.display = 'none'
              } })
            } else {
              intro.style.transition = 'opacity 0.6s ease'
              intro.style.opacity = '0'
              setTimeout(() => { intro.style.display = 'none' }, 650)
            }
          } catch {}
        }
      }, 1500)

      setTimeout(() => {
        try {
          if (window.__nudgeDone) return
          window.__nudgeDone = true
          const doNudge = () => {
            const y = window.scrollY || document.documentElement.scrollTop || 0
            window.scrollTo(0, y + 1)
            window.dispatchEvent(new Event('scroll'))
            requestAnimationFrame(() => {
              window.scrollTo(0, y)
              window.dispatchEvent(new Event('scroll'))
            })
          }
          if (window.lenis && typeof window.lenis.scrollTo === 'function') {
            window.lenis.scrollTo(1, { duration: 0.05 })
            setTimeout(() => window.lenis.scrollTo(0, { duration: 0.05 }), 70)
          } else {
            doNudge()
          }
        } catch {}
      }, 100)

      setTimeout(() => {
        document.querySelectorAll('[text-split], [text-split-delay]').forEach((el) => {
          const cs = getComputedStyle(el)
          if (parseFloat(cs.opacity) === 0) {
            el.style.opacity = '1'
          }
        })
      }, 1800)

      const originalConsoleError = console.error
      console.error = function (...args) {
        const first = args[0]
        const isBenign = typeof first === 'string' && (
          first.includes('improperly configured forms') ||
          first.includes('Permissions Policy') ||
          first.includes('Potential permissions policy violation')
        )
        if (isBenign) return
        originalConsoleError.apply(console, args)
      }
    }

    run().catch(() => {})
  }, [html])

  return (
    <div ref={containerRef} />
  )
}


