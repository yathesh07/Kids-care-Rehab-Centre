/** Programs & activities. Copy sourced from kidscarerehabcenter.in (client's existing approved content). */

export type Program = {
  slug: string
  name: string
  short: string
  body: string[]
  list?: { title: string; items: string[] }
  note?: string
  link?: { label: string; href: string }
}

export const programs: Program[] = [
  {
    slug: 'brain2act',
    name: 'BRAIN2ACT Program',
    short:
      'A movement-based program that synchronises body and mind to improve attention, memory and academic performance.',
    body: [
      'BRAIN2ACT is a unique movement program that synchronizes body and mind to enhance learning and achievement. It stimulates brain function with movement, developing the brain’s neural pathways and improving listening, attention, memory, reading, writing, handwriting and academic performance in school students.',
      'The program builds literacy skills, motor skills, cognitive skills, social and emotional skills, and speech and language skills. BRAIN2ACT is founded on an evidence-based research study.',
    ],
    list: {
      title: 'BRAIN2ACT classes support children with',
      items: [
        'Poor concentration',
        'Memory difficulties',
        'Inattention due to gadget addiction',
        'Reading and writing difficulties',
        'Behaviour issues',
        'Sensitivity and shyness',
        'Stubbornness, irritation and uncontrolled anger',
        'Poor impulse control',
        'Weak balance and motor skills',
        'Weak posture and sitting position',
        'Weak academic performance, copying from the board, writing homework',
      ],
    },
    note:
      'Radha Balachandar. “Effectiveness of ‘Brain2ACT’ Movement-based Intervention to enhance attention in students with Attention Deficit Hyperactivity Disorder (ADHD).” Journal of the Gujarat Research Society 21.16 (2019): 1940–1949.',
  },
  {
    slug: 'online-therapy',
    name: 'Online Therapy Classes',
    short: 'Teletherapy for children, plus online training for teachers, therapists and schools.',
    body: [
      'Kids Care Rehab Centre offers teletherapy for children with Autism, ADHD, learning disabilities, developmental delay, childhood behaviour issues and many more.',
      'We also offer online webinar training programs for teachers, therapists, schools and service providers supporting children with Autism, ADHD, learning disabilities and developmental disorders.',
    ],
  },
  {
    slug: 'online-attention-class',
    name: 'Online Attention & Concentration Classes',
    short: 'BRAIN2ACT attention and concentration classes, delivered online.',
    body: [
      'Kids Care Rehab Centre offers BRAIN2ACT online attention and concentration classes for children.',
    ],
    list: {
      title: 'The program includes',
      items: [
        'Breathing and play exercises',
        'Motor activities and Brain Gym',
        'Visual and auditory processing exercises',
        'Eye-hand coordination and bilateral integration',
        'Visualisation techniques and memory techniques',
        'Social skills and behaviour techniques',
        'Emotional intelligence, stress and anger management',
        'Study skills, problem solving and public speaking',
      ],
    },
  },
  {
    slug: 'growth-mindset-workshop',
    name: 'Online Growth Mindset Workshop',
    short:
      'A seven-day evidence-based workshop helping students focus, study and perform in exams.',
    body: [
      'A seven-day evidence-based growth mindset workshop that trains the brain to focus, motivates study, helps overcome negative self-talk, supports stress-free learning and builds peak performance in exams.',
    ],
    list: {
      title: 'Workshop outline',
      items: [
        'The power of mindset',
        'Attention and concentration exercises',
        'Brain fitness exercises',
        'Study skills',
        'Visualisation',
      ],
    },
    note:
      'Trainer: Dr. R. Radha Balachandar — Paediatric Physiotherapist, Trainer, Child Counsellor and NLP Practitioner. Dates, fees and registration vary by intake — please contact us for the current schedule.',
  },
  {
    slug: 'autism-ott-podcast',
    name: 'Autism OTT Podcast',
    short:
      'Resources, parenting tips and research on autism, ADHD and developmental disorders — in Tamil and English.',
    body: [
      'The Autism OTT Channel provides resources, parenting tips, research studies, and information about Autism, ADHD, learning disabilities, cerebral palsy and developmental disorders in Tamil and English.',
      'The main objective of the podcast is to create awareness about autism spectrum disorder, ADHD, learning disabilities and other neurological conditions. The podcast features special interviews with well-known individuals on the autism spectrum, and with parents about their challenges and achievements.',
    ],
    link: { label: 'Listen to the podcast', href: 'https://anchor.fm/autismottchannel' },
  },
  {
    slug: 'camps-and-workshops',
    name: 'Camps, Assessments & Parent Workshops',
    short:
      'Medical and physiotherapy camps, preschool assessments, ergonomics and free parenting workshops.',
    body: [
      'KCRC conducts and organises medical camps and physiotherapy camps. Physiotherapy treatment and assessment are offered for both adults and children, helping to rule out developing physical issues such as osteoarthritis, periarthritis of the shoulder, low backache and cervical spondylosis.',
      'We organise preschool assessments to identify hyperactivity, behavioural issues, autism and balance problems. These assessments help detect psychological concerns, speech delay, social difficulties and physical development problems, covering gross motor, fine motor and self-care skills across age groups.',
      'We also conduct ergonomics workshops to create awareness of occupational health problems and their remedies, and run parenting seminars, workshops and free awareness programs on parenting styles, child development, positive parenting and children’s behaviour issues.',
    ],
  },
]

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug)
