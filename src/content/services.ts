/**
 * Copy sourced from SERVICES WEBSITE.docx and KCRC_Website_Content_Edited_Final.docx
 * (client-approved 2026-08). Service order follows the client's specified sequence:
 * Paediatric Physiotherapy | Sensory Integration | Speech & Language | Oral-Motor |
 * Occupational Therapy | Behaviour | Social Skills | Brain Gym | Reflex Integration |
 * Latest Technology-Based Solutions | Special Education | Early Intervention & Parent Support.
 * Adult Physiotherapy has its own page (/adult-physio-care); BRAIN2ACT has its own
 * program page (/programs/brain2act) — both cross-linked from here rather than duplicated.
 */

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
  | 'sensory'
  | 'oralmotor'
  | 'social'
  | 'braingym'
  | 'reflex'
  | 'tech'

export const services: Service[] = [
  {
    slug: 'physiotherapy',
    name: 'Paediatric Physiotherapy',
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
    slug: 'sensory-integration-therapy',
    name: 'Sensory Integration Therapy',
    short: 'Supporting sensory processing, regulation and participation in everyday routines.',
    icon: 'sensory',
    intro: [
      'Sensory Integration Therapy supports children who experience difficulty processing and responding to sensory information — touch, movement, sound, sight and body awareness.',
      'Structured sensory activities help children regulate their responses, build motor planning and take part more comfortably in everyday routines.',
    ],
    focusTitle: 'Sensory Integration Therapy focuses on',
    focus: [
      'Sensory processing and regulation',
      'Attention and body awareness',
      'Motor planning',
      'Self-care participation',
      'Tolerance of everyday sensory experiences',
      'Calming and alerting strategies',
      'Participation in classroom and home routines',
    ],
    closing:
      'A more regulated sensory system helps children engage more comfortably with learning, play and family life.',
    conditions: ['autism-spectrum-disorder', 'adhd', 'developmental-delay', 'down-syndrome', 'chromosomal-conditions'],
  },
  {
    slug: 'speech-therapy',
    name: 'Speech and Language Therapy',
    short: 'Helping children communicate their needs, ideas and feelings more clearly.',
    icon: 'speech',
    intro: [
      "Speech and language development plays an important role in a child's ability to communicate, learn, and interact with others. Our Speech and Language Therapy supports children who experience speech delays, language difficulties, communication challenges, or difficulties with social communication.",
      'Our therapists use engaging, play-based activities and structured exercises to encourage communication and language development.',
    ],
    focusTitle: 'Speech and Language Therapy focuses on',
    focus: [
      'Receptive and expressive language',
      'Improving speech clarity and articulation',
      'Vocabulary and sentence development',
      'Listening and comprehension skills',
      'Social communication',
      'Verbal and non-verbal communication',
      'Communication in everyday situations',
    ],
    closing:
      'Our goal is to help children communicate their needs, ideas, feelings, and thoughts more effectively in everyday situations.',
    conditions: ['autism-spectrum-disorder', 'developmental-delay', 'down-syndrome', 'learning-disability', 'cerebral-palsy'],
  },
  {
    slug: 'oral-motor-therapy',
    name: 'Oral-Motor Therapy',
    short: 'Supporting oral awareness, movement and feeding-related skills.',
    icon: 'oralmotor',
    intro: [
      'Oral-Motor Therapy uses appropriate oral-motor and feeding-related activities to support oral awareness, muscle movement and functional skills.',
      'Every program follows individual assessment, and activities are chosen to suit the child\'s specific oral-motor and feeding needs.',
    ],
    focusTitle: 'Oral-Motor Therapy focuses on',
    focus: [
      'Oral awareness and sensitivity',
      'Jaw, lip and tongue movement',
      'Feeding and swallowing-related skills',
      'Chewing and food-texture tolerance',
      'Support for speech clarity where linked to oral-motor function',
      'Individualized activities following assessment',
    ],
    closing:
      'Oral-motor support is planned around each child\'s current abilities and reviewed as skills develop.',
    conditions: ['cerebral-palsy', 'down-syndrome', 'developmental-delay', 'autism-spectrum-disorder'],
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
      'Instruction-following',
      'Adaptive behaviour',
      'Positive alternatives to challenging behaviour',
    ],
    closing:
      "Our therapists use individualized behavioural strategies, positive reinforcement, and structured activities according to each child's needs.",
    conditions: ['adhd', 'autism-spectrum-disorder', 'behavioural-issues', 'learning-disability'],
  },
  {
    slug: 'social-skills-therapy',
    name: 'Social Skills Therapy',
    short: 'Developing joint attention, turn-taking, peer interaction and group participation.',
    icon: 'social',
    intro: [
      'Social Skills Therapy helps children build the everyday social understanding needed to connect with peers, family and their wider community.',
      'Sessions use structured and play-based activities to practise social skills in a supportive, predictable setting before generalising them to real-world situations.',
    ],
    focusTitle: 'Social Skills Therapy focuses on',
    focus: [
      'Joint attention and imitation',
      'Turn-taking',
      'Peer interaction',
      'Conversation skills',
      'Understanding personal space',
      'Group participation',
      'Social understanding in everyday situations',
    ],
    closing:
      'Stronger social skills help children build friendships, join in group activities and participate more confidently at school and at home.',
    conditions: ['autism-spectrum-disorder', 'adhd', 'developmental-delay', 'learning-disability'],
  },
  {
    slug: 'brain-gym',
    name: 'Brain Gym Activities',
    short: 'Structured movement activities that support engagement, coordination and learning readiness.',
    icon: 'braingym',
    intro: [
      'Brain Gym activities are structured movement exercises used as a supportive part of individualized sessions.',
      'They are included, where appropriate, to encourage engagement, coordination and learning readiness alongside a child\'s core therapy program.',
    ],
    focusTitle: 'Brain Gym activities support',
    focus: [
      'Engagement and readiness for learning',
      'Coordination and body awareness',
      'Attention before structured tasks',
      'Cross-body movement patterns',
      'A supportive warm-up to therapy or classroom sessions',
    ],
    closing:
      'Brain Gym is used as one supportive component within a broader individualized therapy or education plan — not a standalone treatment.',
    conditions: ['adhd', 'learning-disability', 'developmental-delay'],
  },
  {
    slug: 'reflex-integration-therapy',
    name: 'Reflex Integration Therapy',
    short: 'Movement-based activities included where clinically appropriate.',
    icon: 'reflex',
    intro: [
      'Reflex Integration Therapy uses movement-based activities that may be included, where clinically appropriate, as one supportive component of an individualized programme.',
      'Suitability is determined by assessment, and activities are reviewed alongside the child\'s wider therapy goals.',
    ],
    focusTitle: 'Reflex Integration activities may support',
    focus: [
      'Foundational movement patterns',
      'Postural stability',
      'Coordination and motor planning',
      'Readiness for more complex motor and learning tasks',
    ],
    closing:
      'As with all our programs, reflex integration activities are included only where clinically appropriate for the individual child.',
    conditions: ['cerebral-palsy', 'developmental-delay', 'learning-disability'],
  },
  {
    slug: 'latest-technology-based-solutions',
    name: 'Latest Technology-Based Solutions',
    short: 'Modern rehabilitation equipment and digital tools that support engagement and progress tracking.',
    icon: 'tech',
    intro: [
      'Appropriate rehabilitation equipment, visual learning tools and digital resources support engagement and functional participation across our programs.',
      'Our innovation roadmap includes therapist-led VR-assisted therapy and skill practice, Mixed Reality learning experiences, AI-supported assessment and documentation, and personalized digital activities — introduced responsibly after testing, staff training, consent and clinical review.',
    ],
    focusTitle: 'Technology-supported care includes',
    focus: [
      'Modern rehabilitation equipment',
      'Visual and digital learning tools',
      'Therapist-led VR-assisted therapy and skill practice (roadmap)',
      'Mixed Reality learning experiences (roadmap)',
      'AI-supported assessment and documentation (roadmap)',
      'Personalized digital activities and progress tracking (roadmap)',
    ],
    closing:
      'These tools complement — not replace — professional clinical and educational judgment.',
    conditions: [],
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
    name: 'Early Intervention & Parent Support',
    short: 'Timely developmental support for young children, plus practical strategies for families.',
    icon: 'early',
    intro: [
      'Early intervention is an important part of supporting children during their early developmental years. At Kids Care Rehab Centre, we provide early intervention programs for young children who show developmental delays or difficulties in communication, movement, learning, behaviour, or social interaction.',
      'Alongside therapy, we provide parent counselling, practical home strategies and regular goal reviews so families can continue learning in everyday routines.',
    ],
    focusTitle: 'Early Intervention & Parent Support focuses on',
    focus: [
      'Communication and language development',
      'Motor development',
      'Cognitive and learning skills',
      'Social interaction',
      'Sensory development',
      'Parent counselling and practical home strategies',
      'Regular goal reviews',
    ],
    closing:
      'Early support can help children build important developmental foundations, while equipping families with strategies that continue between sessions.',
    conditions: ['developmental-delay', 'autism-spectrum-disorder', 'down-syndrome', 'cerebral-palsy', 'chromosomal-conditions'],
  },
]

export const servicesIntro = [
  'Kids Care Rehab Centre provides coordinated paediatric developmental services and individualized adult physiotherapy. No single therapy or technique is suitable for everyone — recommendations are made after assessment and reviewed according to clinical response, safety and functional goals.',
  'We believe that every child has the potential to learn, grow, and become more independent. Our therapy programs are individualized, child-friendly, goal-oriented, and family-centred, helping children make meaningful progress in their everyday lives.',
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
