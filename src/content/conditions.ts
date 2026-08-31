/** Copy verbatim from CONDITIONS WEBSITE.docx (client-approved). */

export type Condition = {
  slug: string
  name: string
  abbr?: string
  short: string
  body: string[]
  /** Service slugs that support this condition. */
  services: string[]
}

export const conditions: Condition[] = [
  {
    slug: 'autism-spectrum-disorder',
    name: 'Autism Spectrum Disorder',
    abbr: 'ASD',
    short: 'Support for communication, social interaction, sensory and behavioural needs.',
    body: [
      'Autism Spectrum Disorder is a developmental condition that can affect communication, social interaction, behaviour, sensory processing, and patterns of play or activities. Every child with autism is different and may have different strengths and support needs.',
      'Our team provides individualized support to help children develop communication, social interaction, sensory, behavioural, learning, and functional skills.',
    ],
    services: ['speech-therapy', 'occupational-therapy', 'behaviour-therapy', 'early-intervention'],
  },
  {
    slug: 'adhd',
    name: 'Attention-Deficit/Hyperactivity Disorder',
    abbr: 'ADHD',
    short: 'Building attention, self-regulation and task participation.',
    body: [
      'ADHD is a neurodevelopmental condition that may affect attention, impulse control, activity levels, organization, and task participation.',
      'Children with ADHD may experience difficulty sitting for activities, following instructions, waiting for their turn, completing tasks, or maintaining attention. Our interventions focus on improving attention, self-regulation, task participation, functional behaviour, and learning skills.',
    ],
    services: ['behaviour-therapy', 'occupational-therapy', 'special-education', 'early-intervention'],
  },
  {
    slug: 'developmental-delay',
    name: 'Developmental Delay',
    short: 'Strengthening milestones across motor, language, cognitive and social skills.',
    body: [
      'Developmental delay refers to a child not reaching expected developmental milestones within the usual age range. Delays may occur in areas such as motor skills, speech and language, cognition, social interaction, or adaptive skills.',
      'Early identification and intervention can provide children with appropriate support during important stages of development. Our multidisciplinary programs are designed to strengthen developmental skills and promote greater functional independence.',
    ],
    services: ['early-intervention', 'speech-therapy', 'occupational-therapy', 'physiotherapy', 'special-education'],
  },
  {
    slug: 'cerebral-palsy',
    name: 'Cerebral Palsy',
    short: 'Developing mobility, balance, postural control and daily independence.',
    body: [
      'Cerebral Palsy is a group of neurological conditions that affect movement, posture, muscle control, and coordination. The impact can vary considerably from one child to another.',
      'Pediatric physiotherapy and other rehabilitation services can support children in developing mobility, balance, strength, postural control, coordination, functional movement, and independence in daily activities.',
    ],
    services: ['physiotherapy', 'occupational-therapy', 'speech-therapy', 'early-intervention'],
  },
  {
    slug: 'muscular-dystrophy',
    name: 'Muscular Dystrophy',
    short: 'Maintaining function, safe movement and participation.',
    body: [
      'Muscular Dystrophy refers to a group of genetic conditions that cause progressive muscle weakness and can affect movement and physical function.',
      "Rehabilitation focuses on maintaining functional abilities, supporting safe movement, improving participation in daily activities, and promoting independence while considering the child's individual condition and energy levels.",
    ],
    services: ['physiotherapy', 'occupational-therapy'],
  },
  {
    slug: 'chromosomal-conditions',
    name: 'Chromosomal Conditions',
    short: 'Individualized multidisciplinary support based on specific developmental needs.',
    body: [
      "Chromosomal conditions occur when there is a change involving the number or structure of chromosomes. These conditions may influence a child's physical development, learning, communication, behaviour, or overall development.",
      'Children with chromosomal conditions may benefit from individualized physiotherapy, occupational therapy, speech therapy, special education, early intervention, and family support based on their specific developmental needs.',
    ],
    services: ['physiotherapy', 'occupational-therapy', 'speech-therapy', 'special-education', 'early-intervention'],
  },
  {
    slug: 'behavioural-issues',
    name: 'Behavioural Issues',
    short: 'Understanding the need behind the behaviour, and building positive alternatives.',
    body: [
      'Some children may experience difficulties with emotional regulation, attention, impulsivity, aggression, communication, social interaction, transitions, or following routines.',
      'Our behavioural support programs aim to understand the underlying needs of the child and encourage positive and functional behaviours through structured activities, positive reinforcement, communication support, and consistent strategies.',
    ],
    services: ['behaviour-therapy', 'early-intervention', 'occupational-therapy'],
  },
  {
    slug: 'learning-disability',
    name: 'Learning Disability',
    short: 'Individualized teaching for reading, writing, maths, attention and memory.',
    body: [
      'Learning disabilities are neurological differences that can affect the way a child acquires, processes, remembers, or uses information. Children may experience difficulties with reading, writing, mathematics, attention, memory, or other academic skills.',
      'Our special education programs use individualized teaching strategies to strengthen academic skills, cognitive abilities, attention, confidence, and school readiness.',
    ],
    services: ['special-education', 'behaviour-therapy', 'speech-therapy'],
  },
  {
    slug: 'spinal-muscular-atrophy',
    name: 'Spinal Muscular Atrophy',
    abbr: 'SMA',
    short: 'Careful, individualized support for movement, positioning and participation.',
    body: [
      'Spinal Muscular Atrophy is a genetic neuromuscular condition that affects motor neurons and can lead to muscle weakness and difficulties with movement and physical function.',
      "Rehabilitation support is individualized according to the child's abilities and medical needs. Therapy may focus on maintaining functional movement, positioning, mobility, participation, and independence while avoiding unnecessary fatigue or physical strain.",
    ],
    services: ['physiotherapy', 'occupational-therapy'],
  },
  {
    slug: 'down-syndrome',
    name: 'Down Syndrome',
    short: 'Motor, communication, cognitive and daily living skill development.',
    body: [
      'Down Syndrome is a genetic condition caused by an extra copy of chromosome 21. Children with Down Syndrome may experience differences in physical development, muscle tone, motor development, communication, learning, and adaptive skills.',
      'Early intervention and multidisciplinary therapy can help children develop motor, communication, cognitive, social, and daily living skills and support greater independence.',
    ],
    services: ['early-intervention', 'physiotherapy', 'speech-therapy', 'occupational-therapy', 'special-education'],
  },
]

export const conditionsIntro = [
  'Every child develops at their own pace, and some children may need additional support to achieve developmental, communication, learning, behavioural, or physical milestones.',
  'At Kids Care Rehab Centre, we provide comprehensive assessment, therapy, rehabilitation, and educational support for children with a range of developmental and neurological conditions. Our multidisciplinary team works with children and their families to understand individual needs and create personalized intervention plans.',
]

export const conditionsClosing = {
  title: "Supporting Every Child's Potential",
  body: [
    "At Kids Care Rehab Centre, we understand that no two children are exactly alike. A diagnosis provides information about a child's condition, but it does not define the child's potential.",
    'Our multidisciplinary approach combines therapy, education, family involvement, and individualized developmental goals to help children build meaningful skills and participate more actively in everyday life.',
    "Early support can make a meaningful difference. If you have concerns about your child's development, our team can help you understand the child's needs and identify appropriate support.",
  ],
}

export const getCondition = (slug: string) => conditions.find((c) => c.slug === slug)
