/** Copy verbatim from SERVICES WEBSITE.docx (client-approved). */

export type Service = {
  slug: string
  name: string
  short: string
  intro: string[]
  focusTitle: string
  focus: string[]
  closing: string
  /** Condition slugs this service commonly supports — powers cross-linking. */
  conditions: string[]
  icon: IconName
}

export type IconName =
  | 'speech'
  | 'hand'
  | 'movement'
  | 'behaviour'
  | 'education'
  | 'early'
  | 'family'

export const services: Service[] = [
  {
    slug: 'speech-therapy',
    name: 'Speech Therapy',
    short: 'Helping children communicate their needs, ideas and feelings more clearly.',
    icon: 'speech',
    intro: [
      "Speech and language development plays an important role in a child's ability to communicate, learn, and interact with others. Our Speech Therapy programs support children who experience speech delays, language difficulties, communication challenges, or difficulties with social communication.",
      'Our therapists use engaging, play-based activities and structured exercises to encourage communication and language development.',
    ],
    focusTitle: 'Speech Therapy focuses on',
    focus: [
      'Speech and language development',
      'Improving speech clarity and articulation',
      'Vocabulary and sentence development',
      'Listening and comprehension skills',
      'Social communication',
      'Verbal and non-verbal communication',
      'Functional communication skills',
    ],
    closing:
      'Our goal is to help children communicate their needs, ideas, feelings, and thoughts more effectively in everyday situations.',
    conditions: ['autism-spectrum-disorder', 'developmental-delay', 'down-syndrome', 'learning-disability', 'cerebral-palsy'],
  },
  {
    slug: 'occupational-therapy',
    name: 'Occupational Therapy',
    short: 'Building the everyday skills that support independence at home and school.',
    icon: 'hand',
    intro: [
      'Occupational Therapy helps children develop the skills required to participate more independently in daily activities, learning, play, and social situations.',
      'Our programs support children who experience difficulties with fine motor skills, coordination, sensory processing, attention, or daily living activities.',
    ],
    focusTitle: 'Occupational Therapy focuses on',
    focus: [
      'Fine motor development',
      'Hand-eye coordination',
      'Sensory processing and integration',
      'Attention and task participation',
      'Visual-motor skills',
      'Self-care and daily living skills',
      'Dressing, feeding, and other functional activities',
    ],
    closing:
      'Through structured and meaningful activities, children are encouraged to develop greater confidence, independence, and participation in everyday life.',
    conditions: ['autism-spectrum-disorder', 'adhd', 'developmental-delay', 'down-syndrome', 'chromosomal-conditions'],
  },
  {
    slug: 'physiotherapy',
    name: 'Physiotherapy',
    short: 'Improving movement, strength, balance and physical independence.',
    icon: 'movement',
    intro: [
      'Pediatric Physiotherapy supports children who experience difficulties with movement, muscle strength, posture, balance, coordination, or physical development.',
      "Our physiotherapists assess each child's functional abilities and develop appropriate therapy programs to promote movement and physical independence.",
    ],
    focusTitle: 'Physiotherapy focuses on',
    focus: [
      'Gross motor development',
      'Muscle strength and flexibility',
      'Postural control',
      'Balance and coordination',
      'Mobility and functional movement',
      'Gait and walking skills',
      'Motor planning and physical independence',
    ],
    closing:
      'Therapy activities are designed to make movement enjoyable while helping children improve their physical abilities and confidence.',
    conditions: ['cerebral-palsy', 'muscular-dystrophy', 'spinal-muscular-atrophy', 'down-syndrome', 'developmental-delay'],
  },
  {
    slug: 'behaviour-therapy',
    name: 'Behaviour Therapy',
    short: 'Supporting attention, emotional regulation and positive behaviour.',
    icon: 'behaviour',
    intro: [
      'Behaviour Therapy supports children in developing positive behaviour patterns, attention, emotional regulation, social interaction, and functional skills.',
      'Children may experience challenges with attention, impulsivity, communication, emotional regulation, transitions, or social interaction. Our structured intervention programs help children understand expectations and develop appropriate responses.',
    ],
    focusTitle: 'Behaviour Therapy focuses on',
    focus: [
      'Attention and concentration',
      'Positive behaviour development',
      'Managing challenging behaviours',
      'Emotional regulation',
      'Social interaction',
      'Following instructions',
      'Developing functional and adaptive skills',
    ],
    closing:
      "Our therapists use individualized behavioural strategies, positive reinforcement, and structured activities according to each child's needs.",
    conditions: ['adhd', 'autism-spectrum-disorder', 'behavioural-issues', 'learning-disability'],
  },
  {
    slug: 'special-education',
    name: 'Special Education',
    short: 'Individualized teaching that meets each child at their own level.',
    icon: 'education',
    intro: [
      'Our Special Education programs provide individualized educational support for children with learning difficulties, developmental delays, and other educational needs.',
      "Special educators work at the child's developmental level and use structured, individualized teaching methods to support academic learning and functional development.",
    ],
    focusTitle: 'Special Education focuses on',
    focus: [
      'Basic literacy and numeracy',
      'Cognitive and learning skills',
      'School readiness',
      'Attention and classroom skills',
      'Individualized learning strategies',
      'Functional and adaptive learning',
      'Supporting children in achieving their educational goals',
    ],
    closing:
      'We aim to create a supportive learning environment where children can learn at their own pace and develop greater confidence in their abilities.',
    conditions: ['learning-disability', 'adhd', 'developmental-delay', 'down-syndrome', 'chromosomal-conditions'],
  },
  {
    slug: 'early-intervention',
    name: 'Early Intervention',
    short: 'Timely developmental support for children aged 0–6 years.',
    icon: 'early',
    intro: [
      'Early intervention is an important part of supporting children during their early developmental years. At Kids Care Rehab Centre, we provide early intervention programs for children from 0–6 years who show developmental delays or difficulties in communication, movement, learning, behaviour, or social interaction.',
      "Early intervention focuses on identifying developmental needs and providing timely support during the child's early years.",
    ],
    focusTitle: 'Our Early Intervention programs focus on',
    focus: [
      'Communication and language development',
      'Motor development',
      'Cognitive and learning skills',
      'Social interaction',
      'Sensory development',
      'Play and functional skills',
      'School readiness',
    ],
    closing:
      'Early support can help children build important developmental foundations and prepare them for future learning and greater independence.',
    conditions: ['developmental-delay', 'autism-spectrum-disorder', 'down-syndrome', 'cerebral-palsy', 'chromosomal-conditions'],
  },
  {
    slug: 'parent-counselling-training',
    name: 'Parent Counselling & Training',
    short: 'Practical strategies families can use in everyday routines at home.',
    icon: 'family',
    intro: [
      "Parents play a vital role in a child's development. At Kids Care Rehab Centre, we believe that therapy becomes more effective when families are actively involved in the child's developmental journey.",
      'Our Parent Counselling and Training programs provide families with practical guidance and strategies that can be incorporated into everyday routines at home.',
    ],
    focusTitle: 'Parent training focuses on',
    focus: [
      "Understanding the child's developmental needs",
      'Behaviour management strategies',
      'Communication support',
      'Home-based learning activities',
      'Supporting daily living skills',
      'Creating effective routines',
      'Encouraging positive parent-child interaction',
    ],
    closing:
      'We work together with parents to create a consistent support system between the therapy centre and home environment.',
    conditions: ['autism-spectrum-disorder', 'adhd', 'behavioural-issues', 'developmental-delay'],
  },
]

export const servicesIntro = [
  'At Kids Care Rehab Centre, we provide comprehensive therapy and rehabilitation services designed to support children with developmental, neurological, behavioural, communication, and learning needs. Our multidisciplinary team works closely with each child and family to understand their individual strengths, challenges, and developmental goals.',
  'We believe that every child has the potential to learn, grow, and become more independent. Our therapy programs are therefore designed to be individualized, child-friendly, goal-oriented, and family-centred, helping children make meaningful progress in their everyday lives.',
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
