/** Copy verbatim from ABOUT US.docx, plus director profile from kidscarerehabcenter.in. */

export const about = {
  heroTitle: 'Empowering Children. Supporting Families. Building an Inclusive Future.',

  intro: [
    'Kids Care Rehab Centre is a specialized rehabilitation and therapy centre dedicated to supporting children with developmental, neurological, behavioural, communication, and learning challenges. We provide comprehensive, child-centred intervention programs designed to help every child discover their strengths, develop essential skills, and move towards greater independence.',
    'We work with children experiencing developmental delays, Autism Spectrum Disorder (ASD), Attention Deficit Hyperactivity Disorder (ADHD), learning disabilities, speech and language disorders, motor difficulties, and other developmental challenges.',
    "At Kids Care Rehab Centre, we believe that every child is unique, with their own abilities, strengths, and potential. Our approach focuses on understanding each child's individual needs and providing personalized intervention programs that support their physical, cognitive, communication, behavioural, social, and educational development.",
  ],

  approach: {
    title: 'Our Multidisciplinary Approach',
    body: [
      'Our centre follows a multidisciplinary approach, bringing together trained professionals from different areas of rehabilitation and special education. Our team includes:',
    ],
    team: [
      'Speech and Language Therapists',
      'Occupational Therapists',
      'Physiotherapists',
      'Behaviour Therapists',
      'Special Educators',
    ],
    after: [
      "By working collaboratively, our professionals develop individualized therapy plans based on each child's developmental needs and goals.",
      'We provide a safe, inclusive, child-friendly, and supportive environment where children can develop communication and language skills, social interaction, motor abilities, behavioural skills, learning skills, and academic readiness.',
      "Beyond therapy, Kids Care Rehab Centre also focuses on parent counselling, parent training, awareness programs, and community outreach initiatives. We believe that empowering parents and families is an essential part of supporting a child's long-term development.",
    ],
  },

  vision: {
    title: 'Our Vision',
    body: [
      'Our vision is to create an inclusive society where every child with special needs has equal opportunities to grow, learn, participate, and live with dignity and independence.',
      'We believe that every child deserves access to appropriate healthcare, rehabilitation, education, and social support. Children with developmental challenges may face barriers in education, healthcare, communication, and community participation. We strive to help remove these barriers through professional intervention, family support, and community awareness.',
      'We envision a society where children with disabilities are respected, accepted, included, and encouraged to participate fully in schools, communities, and everyday life.',
      'Through continuous development of rehabilitation services and strong family partnerships, Kids Care Rehab Centre aims to help children achieve their maximum potential and improved quality of life.',
    ],
  },

  mission: {
    title: 'Our Mission',
    body: [
      'Our mission is to empower children with developmental challenges through quality rehabilitation, specialized education, individualized intervention, and comprehensive family support.',
      'We are committed to:',
    ],
    commitments: [
      'Providing quality and child-centred rehabilitation and therapy services',
      'Promoting early identification and early intervention for developmental delays',
      'Supporting parents through counselling, guidance, and training',
      'Creating awareness about autism, developmental disabilities, and related challenges',
      'Promoting inclusive education and meaningful community participation',
      'Helping children develop functional skills and greater independence',
      'Strengthening collaboration among families, professionals, schools, and the community',
    ],
  },

  objectives: {
    title: 'Our Objectives',
    intro: 'Our key objectives are to:',
    items: [
      'Provide comprehensive and individualized therapy services for children with developmental and neurological challenges.',
      'Promote early intervention and timely support for young children.',
      'Improve awareness and understanding of developmental disabilities within the community.',
      "Empower parents and caregivers with knowledge, guidance, and practical strategies to support their child's development.",
      'Create inclusive and supportive learning environments for children with special needs.',
      "Encourage children's participation in education, family life, and the wider community.",
      'Build partnerships with healthcare professionals, educational institutions, schools, and social organizations to expand rehabilitation and support services.',
    ],
  },

  commitment: {
    title: 'Our Commitment',
    body: [
      'At Kids Care Rehab Centre, we believe that progress is built one step at a time. Every new skill, every attempt to communicate, every achievement, and every moment of increased independence is meaningful.',
      'We are committed to walking alongside children and their families throughout their developmental journey, providing professional care, compassionate support, and opportunities to help every child reach their fullest potential.',
    ],
    closing: 'Every Child Has Potential. We Help Them Discover It.',
  },

  director: {
    name: 'Dr. R. Radha Balachandar',
    credentials:
      'PhD, MPT (Paediatric), M.Sc. (Psychology), PG Diploma in Counselling Psychology, D.Acu, NLP and Reiki Master',
    role: 'Founder & Director, Kids Care Rehab Centre · Director, KCR Special School · Course Coordinator, CDEC Vocational Training Centre · Founder, BRAIN2ACT',
    body: [
      'Dr. R. Radha Balachandar is the Founder and Director of Kids Care Rehab Centre, Director of KCR Special School, Course Coordinator of CDEC Vocational Training Centre and Founder of BRAIN2ACT. With over 20 years of experience, she brings together paediatric physiotherapy, psychology, counselling, early intervention, sensory and movement-based approaches, behaviour support, special education, parent guidance and professional training.',
      'Her doctoral research at the University of Madras focused on movement-based intervention for children with autism, ADHD and learning difficulties. Her work translates clinical knowledge into practical programmes that strengthen attention, memory, coordination, handwriting, learning readiness, communication, emotional regulation and everyday independence. She has trained parents, teachers, therapists and healthcare professionals in India and internationally, including programmes connected with the Kingdom of Eswatini and Malaysia.',
      'She is the author of “Understanding Autism – A Guide to Parents”, and the Tamil books “Autism Oru Paarvai” and “Maram Yerum Meen” (ADHD and learning disability), among other titles listed below.',
    ],
    honours: [
      'Distinguished Clinician Award — Indian Physiotherapy Association Conference, Chennai, March 2020',
      'Best Physiotherapist Award — International Physiotherapy Conference, THERACON19',
      'Best Paediatric Physiotherapist — Medical Excellence Award, World Tamil Chamber of Commerce (2017, per her Practo profile)',
      'Recognition at Raj Bhavan from the Governor of Tamil Nadu for work supporting mental-health awareness',
      'Seva Rathna Award — International Autism Awareness Day 2026, Chennai (as shared publicly by Dr. Radha Balachandar)',
    ],
    training: [
      'Training programmes on developmental disorders, autism, ADHD and learning disabilities organised through the Minister of Health, Kingdom of Eswatini, for physiotherapists, occupational therapists and speech therapists',
      'Autism parent training programme in the Kingdom of Eswatini',
      'National and international workshops for parents, children, healthcare professionals, teachers and school leaders in India and Malaysia',
      'Awareness and training programmes through schools, universities, professional bodies and community programmes',
    ],
  },
}

/**
 * Journey timeline. 2009 (founding) and 2023–2026 milestones are drawn from
 * KCRC_Website_Content_Edited_Final.docx. Per the client's own note in that document,
 * the 2021–2022 and 2025 rows still need to be completed from the centre's internal
 * event register / approved Instagram archive before publication — flagged as draft
 * below rather than filled with invented detail.
 */
export const journey: { year: string; milestone: string; draft?: boolean }[] = [
  {
    year: '2009',
    milestone: 'Kids Care Rehab Centre begins its therapy and training journey in Chennai.',
  },
  {
    year: '2021–2022',
    milestone:
      'Continued therapy, parent support, awareness and training activities. [Awaiting verified centre records and photos from this period.]',
    draft: true,
  },
  {
    year: '2023',
    milestone:
      'Autism awareness outreach with Chettinad School of Physiotherapy; Dr. Radha Balachandar addressed early identification and intervention for ADHD and learning disabilities, including a programme for 100+ government school teachers.',
  },
  {
    year: '2024',
    milestone:
      'Free medical screening camp in Royapettah screened 100+ children for autism, ADHD, developmental delays and learning disabilities, with a parent interaction session.',
  },
  {
    year: '2025',
    milestone:
      "The centre's verified annual activities, workshops, parent programmes and outreach for this year are being compiled from internal records and the approved Instagram archive.",
    draft: true,
  },
  {
    year: '2026',
    milestone:
      '18th Annual Day with an Autism Awareness Camp; online-safety and emotional-protection awareness; an Inclusive Job Fair; an MoU with LICET (17 August 2026); and continued professional and community programmes.',
  },
]

/** Adult Physio Care — retained from the existing site. Real, active service line. */
export const adultPhysio = {
  intro:
    'Specialised physiotherapy assessment and treatment for adults, delivered at our Royapettah centre.',
  treats: [
    'Knee pain and osteoarthritis',
    'Shoulder pain and frozen shoulder',
    'Low back pain and neck pain',
    'Tennis elbow',
    'Ankle and heel pain',
    'Post-fracture stiffness',
    'Stroke rehabilitation',
    'Parkinsonism and dementia',
    'Myopathy, nerve and muscle weakness',
  ],
  equipment: [
    'Short Wave Diathermy (SWD)',
    'Interferential Therapy (IFT)',
    'Ultrasound (US)',
    'Wax therapy',
    'Shoulder wheel and pulley',
    'Traction — ICT and IPT',
    'Functional Electrical Stimulation (FES)',
    'Pulsed Electromagnetic Field Therapy (PEMF)',
    'Swiss ball and balance board',
    'Exercise therapy',
  ],
  prenatal: {
    title: 'Prenatal and postnatal exercise programs',
    intro: 'Our prenatal program consists of three sessions:',
    sessions: [
      'Physiological explanation of pregnancy, simple back exercises, Kegel exercises, diaphragmatic breathing, and advice on back care and preventive exercises.',
      'Explanation of labour pain and the different postures used during labour.',
      'Postnatal health explanation.',
    ],
    postnatal:
      'Postnatal exercises include measuring parameters such as BMI and flexibility, safe back postures for baby feeding, and maternal health fitness.',
  },
}

/** Books authored by the Director. Purchase links verified from the existing site. */
export const books = [
  {
    title: 'Understanding Autism',
    subtitle: 'A Guide to Parents',
    language: 'English',
    description:
      'A practical guide written for parents, offering guidance on understanding and supporting autistic children.',
    links: [
      { label: 'Amazon India', href: 'https://www.amazon.in/dp/B0B5TT76KG' },
      {
        label: 'Flipkart',
        href: 'https://www.flipkart.com/understanding-autism-guide-parents/p/itm8396b033dcca7?pid=9789393712233',
      },
      { label: 'Amazon UK', href: 'https://www.amazon.co.uk/dp/B0B5H6B76H' },
      { label: 'Amazon US', href: 'https://www.amazon.com/dp/B0B5H6B76H' },
      { label: 'Amazon Australia', href: 'https://www.amazon.com.au/dp/B0B5H6B76H' },
      { label: 'Amazon Canada', href: 'https://www.amazon.ca/dp/B0B5H6B76H' },
      {
        label: 'Indie Bookstore',
        href: 'https://indie-bookstore.com/product/understanding-autism-a-guide-to-parents/',
      },
    ],
  },
  {
    title: 'Autism Oru Paarvai',
    subtitle: 'ஆட்டிசம் ஒரு பார்வை',
    language: 'Tamil',
    description:
      'A Tamil-language introduction to autism for parents and families, written to make understanding and early support accessible in the family’s own language.',
    links: [
      { label: 'Amazon India', href: 'https://www.amazon.in/dp/9355301197' },
      {
        label: 'Flipkart',
        href: 'https://www.flipkart.com/autism-oru-paarvai/p/itm2cc31756a588d?pid=9789355301192',
      },
    ],
  },
  {
    title: 'Maram Yerum Meen',
    subtitle: 'மரம் ஏறும் மீன்',
    language: 'Tamil',
    description:
      'A Tamil book on ADHD and learning disability, written for parents and educators supporting children who learn differently.',
    links: [],
  },
  {
    title: 'Kuzhandhai Valarppil Puthu Puthu Yukthigal',
    subtitle: 'குழந்தை வளர்ப்பில் புது புது யுக்திகள்',
    language: 'Tamil',
    description: 'Practical, contemporary strategies for Tamil-speaking parents raising young children.',
    links: [],
  },
  {
    title: 'Foundations of Early Childhood Care & Education',
    subtitle: '',
    language: 'English',
    description: 'A resource on early childhood care and education foundations for parents and educators.',
    links: [],
  },
  {
    title: 'Understanding Child Psychology & Child Counselling',
    subtitle: '',
    language: 'English',
    description: 'An introduction to child psychology and counselling approaches for families and professionals.',
    links: [],
  },
  {
    title: 'Digital Parenting',
    subtitle: '',
    language: 'English',
    description: 'Guidance for parents navigating technology, screen time and digital habits with their children.',
    links: [],
  },
  {
    title: 'Learning Disabilities, ADHD & Neurodiversity',
    subtitle: '',
    language: 'English',
    description: 'A resource on learning disabilities, ADHD and neurodiversity for parents and educators.',
    links: [],
  },
  {
    title: 'Developmental Therapies',
    subtitle: '',
    language: 'English',
    description: 'An overview of developmental therapy approaches used in paediatric rehabilitation.',
    links: [],
  },
  {
    title: 'Worksheets & Activities',
    subtitle: '',
    language: 'English',
    description: 'Practical worksheets and activities for home-based practice between therapy sessions.',
    links: [],
  },
  {
    title: 'Becoming a Filmmaker',
    subtitle: '',
    language: 'English',
    description: "Dr. Radha Balachandar's book outside the clinical space, on the craft of filmmaking.",
    links: [],
  },
]
