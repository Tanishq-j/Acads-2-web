import { Mail, Linkedin, Users, Award, Code, Heart, ScrollText } from 'lucide-react';

const Team = () => {
  const leadership = [{
    name: 'Tanish Patgoankar',
    position: 'President',
    department: 'CSE (AIML)',
    year: 'Third Year',
    image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/v1759768550/tanish-removebg-preview_lbf3jp.png',
    bio: 'Leading ACADS.',
    social: {
      email: '#',
      linkedin: '#'
    }
  }, {
    name: 'Shreya Powar',
    position: 'Vice President',
    department: 'CSE (AIDS)',
    year: 'Third Year',
    image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759768080/Shreya-removebg-preview_ckuej5.png',
    bio: 'Supporting leadership and ops.',
    social: {
      email: '#',
      linkedin: '#'
    }
  }, {
    name: 'Shiv Pardeshi',
    position: 'Secretary',
    department: 'CSE (AIML)',
    year: 'Third Year',
    image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759239495/ShivBGRE-Cell_sv3thq.png',
    bio: 'Driving coordination and communication.',
    social: {
      email: '#',
      linkedin: '#'
    }
  }, {
    name: 'Pratham Kadam',
    position: 'Joint Secretary',
    department: 'CSE (AIDS)',
    year: 'Third Year',
    image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759768080/prafull-removebg-preview_mp7nif.png',
    bio: 'Assisting with operations.',
    social: {
      email: '#',
      linkedin: '#'
    }
  }, {
    name: 'Tanish Jadhav',
    position: 'Treasurer',
    department: 'CSE (AIDS)',
    year: 'Third Year',
    image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759768079/IMG_1615-removebg-preview_gadoo5.png',
    bio: 'Managing finances and procurement.',
    social: {
      email: '#',
      linkedin: '#'
    }
  }, {
    name: 'Praful Harer',
    position: 'Joint Treasurer',
    department: 'CSE (AIML)',
    year: 'Third Year',
    image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759768080/tanishj-removebg-preview_d8c5ms.png',
    bio: 'Assisting finance operations.',
    social: {
      email: '#',
      linkedin: '#'
    }
  }];
  
  const domains = [{
    title: 'Technical',
    icon: Code,
    head: {
      name: 'Tanishq Jain',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759769917/IMG_3277_glccrw.png'
    },
    associates: [{
      name: 'Akshata Tippanawar',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759769905/IMG_3297_ioc5jn.png'
    }, {
      name: 'Parth Kulkarni',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759769917/IMG_3262_vxvigj.png'
    }, {
      name: 'Sakshi Patil',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759769912/IMG_3300_hvhqtx.png'
    }, {
      name: 'Siddharth Chavan',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759769916/IMG_3259_zqaf6q.png'
    }, {
      name: 'Akash Patil',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759769909/IMG_3261_m61x5f.png'
    }]
  }, {
    title: 'Contests & Operations',
    icon: Users,
    head: {
      name: 'Atharv Shewale',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759770212/Atharv_nkkizm.png'
    },
    associates: [{
      name: 'Prathmesh Kagalkar',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759775729/WhatsApp_Image_2025-10-07_at_00.03.48_74dc9269_aa0jo5.png'
    }, {
      name: 'Tanmayi Khot',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759770211/IMG_1542_xsto09.png'
    }, {
      name: 'Nandini Jha',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759779439/IMG_8110-removebg-preview_ly3liy.png'
    }, {
      name: 'Sanjana Kurle',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759775727/WhatsApp_Image_2025-10-07_at_00.00.59_b9713569_q5bikr.png'
    },
    ]
  }, {
    title: 'Design & Graphics',
    icon: Award,
    heads: [{
      name: 'Rushi Dandekar',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759771404/Rushi_without_bg_zvuvtt.png'
    }, {
      name: 'Shruti Asgekar',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759771405/Shruti_Asgekar_wthout_bg_wkmrv4.png'
    }],
    associates: [{
      name: 'Prasanna Phadatare',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759771404/prasanna_without_bg_ay7b2x.png'
    }, {
      name: 'Shruti Kamble',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759771405/shruti_without_bg_jfhu3n.png'
    }, {
      name: 'Shravani Jadhav',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759771404/shravani_wihtout_bg_t0gd38.png'
    },
  {
      name: 'Gaurav Kudtarkar',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759771504/gaurav_without_bg_ly1qv2.png'
    },
  {
      name: 'Madhushri Koshti',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759771404/madhurshree_without_bg_ngtq8l.png'
    },]
  }, {
    title: 'Documentation',
    icon: ScrollText,
    head: {
      name: 'Parth Ladage',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759771468/IMG-20251006-WA0087_pfqj3y.png'
    },
    associates: [{
      name: 'Aditi Patil',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759771469/IMG-20251006-WA0089_afsvlr.png'
    }, {
      name: 'Komal Satam',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759771468/IMG-20251006-WA0088_owcocm.png'
    }, {
      name: 'Atharv Awale',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759775729/WhatsApp_Image_2025-10-07_at_00.02.47_31805df4_ikrner.png'
    },]
  }, {
    title: 'Creativity',
    icon: Heart,
    head: {
      name: 'Piyusha Patil',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759771867/1000054272_gfnih4.png'
    },
    associates: [{
      name: 'Rachana Patil',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759771867/1000054268_mlxxzf.png'
    }, {
      name: 'Astha Polas',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759771866/1000054270_n0sghm.png'
    }, {
      name: 'Aditya Jadhav',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759771865/1000054276_oaaddx.png'
    }, {
      name: 'Sanika Shinde',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759771868/1000054274_o7qt9w.png'
    }, ]
  }, {
    title: 'Film & Media',
    icon: Award,
    heads: [{
      name: 'Abhi Trambadiya',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759777210/IMG_2981-removebg-preview_sy9mks.png'
    }, {
      name: 'Atharva Bhosale',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759773636/1000054298_gz5rvf.png'
    }],
    associates: [{
      name: 'Dhanvantri Panjwani',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759773637/1000054302_p8wvuo.png'
    }, {
      name: 'Shreelakshmi Gosavi',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759773639/1000054296_nuuv8x.png'
    }, {
      name: 'Saarthak Chougule',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759773636/1000054300_htuagz.png'
    }, {
      name: 'Harsh Oswal',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759773639/1000054304_h3bp6e.png'
    }, {
      name: 'Avadhut Satpute',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759773637/1000054294_e81omx.png'
    }]
  }, {
    title: 'Registration',
    icon: Users,
    head: {
      name: 'Piyusha Patil',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759774102/IMG_1548_lfvdlk.png'
    },
    associates: [{
      name: 'Sai Patil',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759774106/IMG_8119_v3regd.png'
    }, {
      name: 'Bhuvaneshwari Hiremath',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759774105/IMG_8112_h6amhv.png'
    }, {
      name: 'Atulya Sahu',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759774101/IMG_1524_wzp4e9.png'
    }, {
      name: 'Shahu Mangalekar',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759777068/2-removebg-preview_zk55cf.png'
    }, ]
  }, {
    title: 'Logistics',
    icon: Users,
    heads: [{
      name: 'Tirth Katkar',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759774729/IMG_1576_y3j4xm.png'
    }, {
      name: 'Shardul Swami',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759774730/IMG_1573_mm4wo5.png'
    }],
    associates: [{
      name: 'Parth Patil',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759775072/WhatsApp_Image_2025-10-06_at_23.53.01_ea199555-removebg-preview_dtldvj.png'
    }, {
      name: 'Dhananjay Divekar',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759774726/IMG_1521_pihky2.png'
    }, {
      name: 'Swayam Patil',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759774731/IMG_1527_v8fnar.png'
    }, {
      name: 'Parth Gavali',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759774723/IMG_1514_lawcel.png'
    }, {
      name: 'Khushal Ahire',
      image: 'https://res.cloudinary.com/dafvn9a2m/image/upload/w_350,h_350/v1759774725/IMG_1517_hxlyaq.png'
    }]
  }];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Our Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Meet the dedicated individuals who make ACADS a thriving community
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Leadership Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((member, index) => (
                <div
                  key={index}
                  className="group glass-card p-6 rounded-2xl overflow-visible hover:scale-[1.02] transition-transform"
                >
                  <div className="text-center overflow-visible">
                    <div className="relative mx-auto mb-4 w-32 h-32 rounded-full overflow-visible z-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 via-cyan-400/50 to-blue-600/50 rounded-full blur-sm"></div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/30 via-sky-300/30 to-cyan-500/30 rounded-full"></div>
                      <div className="relative w-full h-full rounded-full ring-2 ring-blue-400/40 shadow-xl shadow-blue-500/25 overflow-visible flex items-end justify-center">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-bottom rounded-full transition-all duration-500 ease-out relative z-[100] group-hover:scale-[1.15] group-hover:drop-shadow-2xl"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold mb-2">
                      {member.position}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      {member.department}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {member.year}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {member.bio}
                    </p>
                    <div className="flex justify-center space-x-3">
                      <a
                        href={`mailto:${member.social.email}`}
                        className="p-2 glass-card rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="p-2 glass-card rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Domains</h2>
            <div className="grid md:grid-cols-1 gap-12">
              {domains.map((dom, i) => (
                <div key={i} className="glass-card p-10 rounded-2xl overflow-visible">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                      <dom.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{dom.title}</h3>
                  </div>
                  <div className="space-y-8">
                    {dom.head && (
                      <div className="group text-center overflow-visible z-10">
                        <div className="relative mx-auto mb-3 w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-visible">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-cyan-400/40 to-indigo-500/40 rounded-2xl blur-md"></div>
                          <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/25 via-blue-300/25 to-cyan-500/25 rounded-2xl"></div>
                          <div className="relative w-full h-full rounded-2xl ring-2 ring-blue-400/40 shadow-2xl shadow-blue-500/30 overflow-visible flex items-end justify-center">
                            <img
                              src={dom.head.image}
                              alt={dom.head.name}
                              className="w-full h-full object-cover object-bottom rounded-2xl transition-all duration-500 ease-out relative z-[100] group-hover:scale-[1.15] group-hover:drop-shadow-2xl"
                            />
                          </div>
                        </div>
                        <div className="text-base font-semibold">
                          {dom.head.name}
                        </div>
                        <div className="text-sm text-muted-foreground">Head</div>
                      </div>
                    )}
                    {dom.heads && (
                      <div className="flex justify-center gap-8 flex-wrap">
                        {dom.heads.map((head, headIdx) => (
                          <div key={headIdx} className="group text-center overflow-visible z-10">
                            <div className="relative mx-auto mb-3 w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-visible">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-cyan-400/40 to-indigo-500/40 rounded-2xl blur-md"></div>
                              <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/25 via-blue-300/25 to-cyan-500/25 rounded-2xl"></div>
                              <div className="relative w-full h-full rounded-2xl ring-2 ring-blue-400/40 shadow-2xl shadow-blue-500/30 overflow-visible flex items-end justify-center">
                                <img
                                  src={head.image}
                                  alt={head.name}
                                  className="w-full h-full object-cover object-bottom rounded-2xl transition-all duration-500 ease-out relative z-[100] group-hover:scale-[1.15] group-hover:drop-shadow-2xl"
                                />
                              </div>
                            </div>
                            <div className="text-base font-semibold">
                              {head.name}
                            </div>
                            <div className="text-sm text-muted-foreground">Head</div>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex justify-center flex-wrap gap-10 px-6">
                      {dom.associates.map((a, idx) => (
                        <div key={idx} className="group text-center overflow-visible z-10 w-32 md:w-36">
                          <div className="relative mx-auto mb-3 w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-visible">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/35 via-cyan-400/35 to-indigo-500/35 rounded-2xl blur-sm"></div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/20 via-blue-300/20 to-cyan-500/20 rounded-2xl"></div>
                            <div className="relative w-full h-full rounded-2xl ring-2 ring-blue-400/40 shadow-xl shadow-blue-500/25 overflow-visible flex items-end justify-center">
                              <img
                                src={a.image}
                                alt={a.name}
                                className="w-full h-full object-cover object-bottom rounded-2xl transition-all duration-500 ease-out relative z-[100] group-hover:scale-[1.15] group-hover:drop-shadow-xl"
                              />
                            </div>
                          </div>
                          <div className="text-sm font-medium">{a.name}</div>
                          <div className="text-xs text-muted-foreground">
                            Associate
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center glass-card p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Interested in Joining Our Team?
            </h2>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate students who want to contribute
              to our community. Keep an eye out for our recruitment announcements!
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl">
                <h4 className="font-bold mb-2">S.Y. Interviews</h4>
                <p className="text-sm text-muted-foreground">
                  Core Team positions for Second Year students
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <h4 className="font-bold mb-2">T.Y. Interviews</h4>
                <p className="text-sm text-muted-foreground">
                  Leadership positions for Third Year students
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  );
};

export default Team;