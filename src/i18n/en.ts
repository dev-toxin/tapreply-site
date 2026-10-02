// English dictionary — the source of truth for the dictionary shape (type Dict).
// ru.ts and es.ts must mirror this structure exactly.

export const en = {
  htmlLang: 'en',
  ogLocale: 'en_US',
  siteName: 'TapReply',

  common: {
    skip: 'Skip to content',
    menu: 'Menu',
    langSwitch: 'Change language',
    homeLabel: 'TapReply — home',
    ctaPilot: 'Become a pilot',
    ctaHow: 'How it works',
    example: 'Example',
    earlyAccess: 'Early access · pilot program',
    learnMore: 'Learn more',
    draftTitle: 'Draft — not legal advice, under review',
    draftText:
      'This document is a working draft published for transparency during the pilot. It will be reviewed by a lawyer before the commercial launch.',
    lastUpdated: 'Last updated: 2 October 2026',
    pricesNote: 'Early-access pricing — prices may change.',
    emailUs: 'Email us',
    onThisPage: 'On this page',
    forRestaurants: 'For restaurants & cafés',
    forHotels: 'For guest houses & hotels',
  },

  nav: {
    features: 'Features',
    how: 'How it works',
    pricing: 'Pricing',
    pilot: 'Pilot',
    faq: 'FAQ',
    about: 'About',
  },

  footer: {
    tagline: 'AI review replies for cafés, restaurants, bars and small hotels — in your guest’s language.',
    product: 'Product',
    company: 'Company',
    legal: 'Legal',
    privacy: 'Privacy policy',
    terms: 'Terms of use',
    contact: 'Contact',
    studio: 'AnKo Software Labs',
    rights: '© 2026 AnKo Software Labs, individual entrepreneur, Georgia',
  },

  // The Tourist Shield example used in the hero mockup and the demo section.
  shield: {
    name: 'Tourist Shield',
    venue: 'Old Town Khinkali · Tbilisi',
    venueNote: 'Fictional venue, example review',
    guest: 'Lukas M.',
    platform: 'Google',
    time: '2 min ago',
    approve: 'Approve & copy',
    edit: 'Edit',
    youConfirm: 'Nothing is published until you confirm.',
    steps: [
      {
        key: 'original',
        label: 'Original review',
        lang: 'German · detected',
        text: 'Sehr leckere Chinkali und ein super freundlicher Kellner! Leider mussten wir fast 40 Minuten auf das Essen warten. Trotzdem kommen wir gern wieder.',
      },
      {
        key: 'translation',
        label: 'Translation for you',
        lang: 'English',
        text: 'Very tasty khinkali and a super friendly waiter! Unfortunately we had to wait almost 40 minutes for the food. Still, we’d happily come back.',
      },
      {
        key: 'reply',
        label: 'Reply to the guest',
        lang: 'German',
        text: 'Vielen Dank für Ihren Besuch und die lieben Worte über unsere Chinkali! Es tut uns leid, dass Sie so lange warten mussten – wir haben das bereits mit unserem Küchenteam besprochen. Wir freuen uns, Sie bald wieder bei uns zu begrüßen!',
      },
      {
        key: 'replyTranslation',
        label: 'Your reply, translated for you',
        lang: 'English',
        text: 'Thank you for visiting and for the kind words about our khinkali! We’re sorry you had to wait so long — we have already discussed it with our kitchen team. We look forward to welcoming you back soon!',
      },
    ],
  },

  platforms: {
    legend: {
      api: 'Official API (in preparation)',
      email: 'Notification e-mail forwarding',
      manual: 'Paste or share the review',
    },
    cols: {
      platform: 'Platform',
      in: 'How the review gets to TapReply',
      out: 'How the reply gets published',
      note: 'Notes',
    },
    items: [
      {
        name: 'Google',
        methods: ['api', 'email', 'manual'],
        in: 'Official Google Business Profile API — in preparation. Until then: notification e-mails or paste.',
        out: 'Copy the approved reply into Google Business Profile. Direct publishing will follow the official API.',
        note: 'Google is the only platform where we plan an API connection first.',
      },
      {
        name: 'Yandex Maps',
        methods: ['email', 'manual'],
        in: 'Forward notification e-mails or paste the review.',
        out: 'Copy the approved reply into Yandex Business.',
        note: 'Replies are expected in Russian — TapReply drafts them in Russian, with a translation for you.',
      },
      {
        name: '2GIS',
        methods: ['email', 'manual'],
        in: 'Forward notification e-mails or paste the review.',
        out: 'Copy the approved reply into your 2GIS business account.',
        note: '',
      },
      {
        name: 'Tripadvisor',
        methods: ['email', 'manual'],
        in: 'Forward notification e-mails or paste the review.',
        out: 'Copy the approved reply into the Tripadvisor management center.',
        note: '',
      },
      {
        name: 'Booking.com',
        methods: ['email', 'manual'],
        in: 'Forward notification e-mails or paste the review.',
        out: 'Copy the approved reply into the Booking.com extranet.',
        note: '',
      },
      {
        name: 'TheFork',
        methods: ['email', 'manual'],
        in: 'Forward notification e-mails or paste the review.',
        out: 'Copy the approved reply into TheFork Manager.',
        note: '',
      },
      {
        name: 'Facebook',
        methods: ['manual'],
        in: 'Paste or share the review text.',
        out: 'Copy the approved reply under the review on your page.',
        note: '',
      },
      {
        name: 'Any other site',
        methods: ['manual'],
        in: 'Paste or share any review text.',
        out: 'Copy the reply wherever you answer guests.',
        note: '',
      },
    ],
    noPasswords:
      'TapReply never asks for your passwords to Google, Yandex, Booking or any other platform, and never logs in on your behalf.',
  },

  pages: {
    home: {
      title: 'TapReply — reply to every review in your guest’s language',
      description:
        'AI review replies for cafés, restaurants, bars and small hotels. All platforms in one feed, a draft in the guest’s language in seconds, a translation for you. Early access.',
      hero: {
        h1: 'Reply to every review — in your guest’s language.',
        sub: 'Google, Yandex Maps, 2GIS, Tripadvisor, Booking and more in one feed. TapReply drafts a reply in the guest’s language and translates everything for you — about 10 seconds per review, right from your phone.',
        note: 'No passwords to your review platforms. You approve every reply.',
      },
      platforms: {
        kicker: 'Platforms',
        title: 'Where your guests write — honestly explained.',
        sub: 'We connect Google through its official API (in preparation). Everything else works through notification e-mails or a simple paste — and you publish the reply yourself.',
        more: 'See connection details',
      },
      how: {
        kicker: 'How it works',
        title: 'Three steps, one thumb.',
        steps: [
          {
            title: 'Bring in your reviews',
            text: 'Forward notification e-mails or paste a review. Google via the official API is in preparation.',
          },
          {
            title: 'Get a draft in the guest’s language',
            text: 'TapReply detects the language, translates the review for you and writes a reply in your venue’s tone.',
          },
          {
            title: 'Check and send',
            text: 'Read the translation of your reply, edit if needed, copy it to the platform. Done.',
          },
        ],
      },
      shield: {
        kicker: 'Tourist Shield',
        title: 'Understand the guest. Be understood by the guest.',
        sub: 'Four clear blocks for every review: the original, a translation for you, a reply in the guest’s language and a translation of that reply — so you always know exactly what you publish.',
      },
      why: {
        kicker: 'Why TapReply',
        title: 'Made for owners who run the floor, not a dashboard.',
        items: [
          {
            icon: 'globe',
            title: 'Guest’s language — and the platform’s',
            text: 'Replies in the language of the review, or the one the platform expects (Yandex Maps — Russian).',
          },
          {
            icon: 'lock',
            title: 'No passwords',
            text: 'We never ask for logins to your review platforms. Your accounts stay yours.',
          },
          {
            icon: 'phone',
            title: 'Phone first',
            text: 'Works in the browser and installs on your home screen like an app. No App Store needed.',
          },
          {
            icon: 'tone',
            title: 'Your venue’s tone',
            text: 'Warm, formal or playful — set it once, and drafts sound like you, not like a robot.',
          },
          {
            icon: 'check',
            title: 'You always confirm',
            text: 'AI only drafts. Nothing reaches a guest until you approve it.',
          },
          {
            icon: 'inbox',
            title: 'One feed for everything',
            text: 'New, unanswered and negative reviews from every platform in one list.',
          },
        ],
      },
      security: {
        kicker: 'Security & privacy',
        title: 'Built so you never hand over the keys.',
        text: 'Your review platforms stay under your own logins. TapReply never asks for them — by design.',
        points: [
          'No passwords or logins to Google, Yandex, Booking or other platforms.',
          'Only review texts and your replies are processed — no guest payment data.',
          'Every reply is approved by a person before it goes anywhere.',
          'Delete your data at any time with one e-mail.',
        ],
      },
      pricing: {
        kicker: 'Pricing',
        title: 'Simple pricing per venue.',
        sub: 'Start free. Early-access prices are a starting point and may change.',
        more: 'See all plans',
      },
      faq: {
        kicker: 'FAQ',
        title: 'Short answers.',
        more: 'All questions',
      },
      compare: {
        kicker: 'Compared honestly',
        title: 'TapReply vs. the built-in AI reply in Google',
        sub: 'Google Business Profile can suggest replies too. It is a good option if Google is your only platform.',
        cols: ['', 'Google’s built-in suggestions', 'TapReply'],
        rows: [
          ['Platforms', 'Google only', 'Google, Yandex Maps, 2GIS, Tripadvisor, Booking.com, TheFork, Facebook and more'],
          ['Translation of the review for you', 'Yes, machine translation', 'Yes, into your language, next to the original'],
          ['Translation of your reply back to you', 'Not as a separate step', 'Yes — you know exactly what you publish'],
          ['One feed for all reviews', 'No', 'Yes'],
          ['Price', 'Free', 'Free plan + paid plans per venue'],
        ],
        note: 'Based on publicly available information as of October 2026; Google’s features may change.',
      },
      cta: {
        title: 'Looking for 3–10 pilot venues.',
        text: 'Cafés, restaurants, bars and small hotels with guests from abroad. Pilot venues shape the product and get preferential early pricing.',
        secondary: 'Write to the founder',
      },
    },

    features: {
      title: 'Features — TapReply',
      description:
        'Tourist Shield translation, one review feed for all platforms, replies in the guest’s language, your venue’s tone, a phone app without the App Store, and no platform passwords.',
      h1: 'Everything you need to answer guests well — nothing you don’t.',
      lead: 'TapReply is a calm tool for one job: answering reviews quickly and correctly in any language, from your phone.',
      sections: [
        {
          id: 'tourist-shield',
          icon: 'shield',
          title: 'Tourist Shield',
          text: 'A review in German, Hebrew or Korean is no longer a problem. You see the original, a translation into your language, a reply in the guest’s language and a translation of your reply — four separate blocks, so you always know what you publish.',
          points: [
            'Automatic language detection',
            'The guest only sees the reply; translations stay with you',
            'If the guest writes in your language, no duplicate blocks',
          ],
        },
        {
          id: 'feed',
          icon: 'inbox',
          title: 'One feed for every platform',
          text: 'Reviews from Google, Yandex Maps, 2GIS, Tripadvisor, Booking.com, TheFork, Facebook and others in one list with simple filters.',
          points: ['New, Unanswered, Negative (1–2★), Needs attention, Replied', 'Notifications about new and negative reviews', 'Several venues in one account'],
        },
        {
          id: 'languages',
          icon: 'globe',
          title: 'The guest’s language — or the platform’s',
          text: 'By default TapReply replies in the language of the review. Where a platform expects a specific language (for example, Russian on Yandex Maps), the draft follows the platform.',
          points: ['Interface: English, Russian, Spanish', 'Your translation language is set separately from the interface', 'Guest languages: all major European and Asian languages'],
        },
        {
          id: 'tone',
          icon: 'tone',
          title: 'Your venue’s tone',
          text: 'Describe your place once — family café, wine bar, guest house — and choose the tone. Drafts thank for specific dishes, apologise for specific problems and never sound like a template.',
          points: ['Warm, formal or relaxed tone', 'Signature with your name or the venue’s', 'Careful handling of negative reviews: no arguing with guests'],
        },
        {
          id: 'pwa',
          icon: 'phone',
          title: 'On your phone, like an app',
          text: 'TapReply works in any modern browser and installs on the home screen of your iPhone or Android phone. No App Store, no updates to install — about 10 seconds per review.',
          points: ['iPhone (Safari) and Android (Chrome)', 'Large buttons, one-thumb flow', 'Works on a laptop as well'],
        },
        {
          id: 'security',
          icon: 'lock',
          title: 'Security by design',
          text: 'TapReply does not ask for passwords to your review platforms and never logs in on your behalf. AI prepares a draft; a person always confirms it.',
          points: ['No platform passwords', 'Human approval for every reply', 'Data deletion on request'],
        },
      ],
      cta: {
        title: 'See it on your own reviews.',
        text: 'Join the pilot and we will set TapReply up for your venue together.',
      },
    },

    how: {
      title: 'How it works — TapReply',
      description:
        'Step-by-step: how reviews get into TapReply, how a reply in the guest’s language is prepared, and an honest table of platforms and connection methods.',
      h1: 'From a new review to a published reply in about 10 seconds.',
      lead: 'Here is exactly what happens — including what is automated today and what you still do yourself.',
      steps: [
        {
          title: 'A guest leaves a review',
          text: 'On Google, Yandex Maps, 2GIS, Tripadvisor, Booking.com or anywhere else.',
        },
        {
          title: 'The review appears in TapReply',
          text: 'Forward the platform’s notification e-mails to your personal TapReply address, or paste / share the review text from your phone. Google via the official API is in preparation.',
        },
        {
          title: 'TapReply prepares a draft',
          text: 'Language detection, a translation for you and a reply in the guest’s language (or the platform’s language) in your venue’s tone.',
        },
        {
          title: 'You check and edit',
          text: 'Read the translation of the reply, change a word or regenerate. Nothing is sent automatically.',
        },
        {
          title: 'You publish',
          text: 'Copy the reply with one tap and paste it into the platform’s business account. You stay logged in only where you already are.',
        },
      ],
      tableTitle: 'Platforms and connection methods',
      tableIntro: 'We prefer to be precise rather than impressive. This is the current state for the pilot.',
      honesty:
        'We do not scrape platforms and do not log into your accounts. When a platform offers an official API for replies, we will use it — starting with Google.',
      cta: {
        title: 'Want to try it with your reviews?',
        text: 'Pilot venues get personal onboarding.',
      },
    },

    pricing: {
      title: 'Pricing — TapReply',
      description:
        'Early-access pricing per venue: Free with 5 AI replies a month, Pilot / Individual around $19–29 per venue, discounts for 3–5 venues, Chain on request.',
      h1: 'Pricing per venue. Start free.',
      lead: 'These are early-access prices. We are testing them with pilot venues, so they may change — pilot venues will always hear about it first.',
      plans: [
        {
          name: 'Free',
          price: '$0',
          period: '',
          desc: 'To try TapReply on real reviews.',
          features: ['1 venue', '5 AI replies per month', 'Tourist Shield', 'All platforms via paste'],
          cta: 'Request access',
          highlight: false,
        },
        {
          name: 'Pilot / Individual',
          price: '$19–29',
          period: 'per venue / month · target',
          desc: 'For one café, restaurant, bar or guest house.',
          features: ['1 venue', 'AI replies for your normal review volume', 'Tourist Shield and venue tone', 'Notification e-mail forwarding', 'Personal onboarding during the pilot'],
          cta: 'Become a pilot',
          highlight: true,
        },
        {
          name: 'Multi',
          price: 'Discount',
          period: 'per venue, 3–5 venues',
          desc: 'For owners with several places.',
          features: ['3–5 venues in one account', 'Lower price per venue', 'One feed, filters by venue'],
          cta: 'Discuss',
          highlight: false,
        },
        {
          name: 'Chain',
          price: 'On request',
          period: '',
          desc: 'For chains and hotel groups.',
          features: ['6+ venues', 'Custom limits', 'Invoice billing'],
          cta: 'Contact us',
          highlight: false,
        },
      ],
      faqTitle: 'Payment questions',
      faq: [
        {
          q: 'How do pilot venues pay?',
          a: 'By invoice, monthly. There are no automatic card charges during the pilot.',
        },
        {
          q: 'Will the price change?',
          a: 'Possibly — these are early-access prices. If they change, we will tell pilot venues in advance, and the terms agreed with you individually remain in force until the end of the agreed period.',
        },
        {
          q: 'What counts as an AI reply?',
          a: 'One generated reply draft. Edits to a draft and translations of your own text are not counted separately.',
        },
        {
          q: 'Can I cancel?',
          a: 'Yes, at any time — just tell us by e-mail. No long-term contracts in the pilot.',
        },
      ],
    },

    pilot: {
      title: 'Pilot program — TapReply',
      description:
        'We are looking for 3–10 cafés, restaurants, bars and small hotels with guests from abroad to pilot TapReply. Personal onboarding and preferential early pricing.',
      h1: 'Become one of our first 3–10 pilot venues.',
      lead: 'We are building TapReply together with the people who use it every day. Pilot venues get the product early, personal help and a voice in what we build next.',
      who: {
        title: 'Who it’s for',
        items: [
          'Cafés, restaurants, bars, guest houses and small hotels',
          'Guests write reviews in several languages',
          'You answer reviews yourself, often from your phone',
          'First markets: Russian-speaking venues in Georgia and Kazakhstan, then Spain and Latin America',
        ],
      },
      get: {
        title: 'What you get',
        items: [
          'Early access to TapReply for your venue',
          'Personal onboarding: we set up your platforms and tone together',
          'Preferential early pricing, agreed individually',
          'A direct line to the founder',
        ],
      },
      ask: {
        title: 'What we ask in return',
        items: [
          'Use TapReply for your real reviews for 4–8 weeks',
          'Short feedback: a message or a 20-minute call every couple of weeks',
          'Tell us honestly what doesn’t work',
        ],
      },
      form: {
        title: 'Request a pilot spot',
        intro: 'Fill in the form — it opens your e-mail app with a ready message. Nothing is sent until you press “Send” there.',
        name: 'Your name',
        venue: 'Venue name',
        city: 'City and country',
        type: 'Type of venue',
        typeOptions: ['Café', 'Restaurant', 'Bar', 'Guest house', 'Small hotel', 'Other'],
        platforms: 'Where do guests leave reviews?',
        languages: 'Guest languages you see most often',
        email: 'Your e-mail',
        message: 'Anything else? (optional)',
        submit: 'Prepare e-mail',
        fallback: 'Prefer to write yourself?',
        subject: 'TapReply pilot request',
        privacy: 'We use these details only to reply to your request.',
      },
    },

    faq: {
      title: 'FAQ — TapReply',
      description:
        'Answers about TapReply: passwords, languages, Yandex Maps, whether AI publishes by itself, review data, iPhone and Android, pricing.',
      h1: 'Frequently asked questions',
      lead: 'Didn’t find your question? Write to us — we reply personally.',
      items: [
        {
          q: 'Do I need to give you my Google, Yandex or Booking password?',
          a: 'No. TapReply never asks for passwords to review platforms and never logs in on your behalf. Reviews arrive through notification e-mails, paste/share or — for Google — the official API (in preparation).',
        },
        {
          q: 'Does the AI publish replies by itself?',
          a: 'No. AI only prepares a draft. You read it (with a translation), edit if you want and publish it yourself.',
        },
        {
          q: 'Which languages are supported?',
          a: 'Guests: all major European and Asian languages are understood and answered. Interface: English, Russian and Spanish. Your translation language can be set separately.',
        },
        {
          q: 'What about Yandex Maps?',
          a: 'Yandex Maps reviews come in via notification e-mails or paste. Replies there are expected in Russian, so TapReply drafts them in Russian — with a translation for you if you need it.',
        },
        {
          q: 'Which platforms are supported?',
          a: 'Google, Yandex Maps, 2GIS, Tripadvisor, Booking.com, TheFork, Facebook — and any other site where you can copy the review text. See the table on the “How it works” page for details.',
        },
        {
          q: 'Will the reply sound like a template?',
          a: 'No. Drafts mention what the guest actually wrote and follow the tone you set for your venue. You can always edit the text.',
        },
        {
          q: 'Does it work on iPhone and Android?',
          a: 'Yes. TapReply runs in the browser and can be added to the home screen like an app — Safari on iPhone, Chrome on Android. It also works on a laptop.',
        },
        {
          q: 'Do I need to install anything from the App Store?',
          a: 'No. It is a web app (PWA): open the link and add it to your home screen.',
        },
        {
          q: 'What happens to review texts and my replies?',
          a: 'They are processed only to translate and prepare replies for you. We do not sell data or use it for advertising. You can ask us to delete your data at any time.',
        },
        {
          q: 'Who sees the translations?',
          a: 'Only you. The guest sees only the reply in their language.',
        },
        {
          q: 'How much does it cost?',
          a: 'Free: 1 venue and 5 AI replies per month. Paid plans start from a target of $19–29 per venue per month. These are early-access prices and may change.',
        },
        {
          q: 'Can I manage several venues?',
          a: 'Yes. The Multi plan covers 3–5 venues with a discount per venue; for larger groups — Chain, on request.',
        },
        {
          q: 'Is TapReply already available?',
          a: 'We are in early access and are looking for 3–10 pilot venues. Request a spot on the Pilot page.',
        },
        {
          q: 'Who is behind TapReply?',
          a: 'AnKo Software Labs, a small independent software studio — an individual entrepreneur registered in Georgia.',
        },
      ],
    },

    about: {
      title: 'About — TapReply by AnKo Software Labs',
      description:
        'TapReply is built by AnKo Software Labs, a small independent software studio in Georgia. Contacts and how we work.',
      h1: 'A small studio building a calm tool for hospitality.',
      lead: 'TapReply is made by AnKo Software Labs — an independent software studio run by an individual entrepreneur in Georgia.',
      paragraphs: [
        'We see the same thing in cafés and guest houses from Tbilisi to Almaty and Valencia: owners care about their guests, but answering reviews in five languages from a phone between orders is hard. So reviews stay unanswered — and future guests notice.',
        'TapReply exists to make a good reply take seconds, not minutes, and to make sure the owner always understands what is being published. We avoid “magic AI” promises: AI drafts, a person decides.',
        'We are at an early stage and work closely with a small number of pilot venues. If that sounds like you, we would love to hear from you.',
      ],
      facts: [
        { label: 'Studio', value: 'AnKo Software Labs' },
        { label: 'Legal form', value: 'Individual entrepreneur, Georgia' },
        { label: 'Stage', value: 'Early access, pilot program' },
        { label: 'First markets', value: 'Georgia, Kazakhstan; then Spain and Latin America' },
      ],
      contactTitle: 'Contact',
      contactText: 'The fastest way to reach us is e-mail. We reply personally.',
      studioLink: 'Studio website',
    },

    privacy: {
      title: 'Privacy policy (draft) — TapReply',
      description: 'Draft privacy policy of TapReply: what data we process, why, how long we keep it and how to delete it.',
      h1: 'Privacy policy',
      sections: [
        {
          h: 'Who we are',
          p: [
            'TapReply is operated by AnKo Software Labs, an individual entrepreneur registered in Georgia (registration number: [TODO]). Contact: ceo@ankosoftlab.com.',
          ],
        },
        {
          h: 'What data we process',
          p: [
            'Account data: your e-mail address and, if you provide them, your name and your venue’s name and city.',
            'Content: texts of reviews you bring into TapReply (including the reviewer’s public display name, if present in the text) and the replies prepared and approved by you.',
            'Technical data: minimal logs needed to keep the service secure and working (for example, time of request and error codes).',
            'This website itself does not use tracking cookies or third-party analytics.',
          ],
        },
        {
          h: 'Why we process it',
          p: [
            'To provide the service: translate reviews, prepare reply drafts and show them to you.',
            'To communicate with you about your account, the pilot program and billing.',
            'To keep the service secure and to fix errors.',
            'We do not sell personal data and do not use it for advertising.',
          ],
        },
        {
          h: 'Processors',
          p: [
            'We use carefully selected service providers: hosting and database infrastructure located in the EU, and an AI model provider that processes review texts only to generate translations and reply drafts. The list of processors is available on request.',
          ],
        },
        {
          h: 'How long we keep data',
          p: [
            'We keep your data while your account is active. After you close your account or ask us to delete your data, we delete it within 30 days, except where the law requires us to keep certain records (for example, invoices).',
          ],
        },
        {
          h: 'Your rights',
          p: [
            'You can ask us for a copy of your data, to correct it or to delete it. Write to ceo@ankosoftlab.com from the e-mail address linked to your account.',
          ],
        },
        {
          h: 'Cookies',
          p: [
            'We use only cookies that are strictly necessary for signing in and keeping the service working. No advertising or tracking cookies.',
          ],
        },
        {
          h: 'Changes',
          p: ['We will publish changes to this policy on this page and notify active users by e-mail about significant changes.'],
        },
      ],
    },

    terms: {
      title: 'Terms of use (draft) — TapReply',
      description: 'Draft terms of use of TapReply during early access and the pilot program.',
      h1: 'Terms of use',
      sections: [
        {
          h: 'The service',
          p: [
            'TapReply is provided by AnKo Software Labs, an individual entrepreneur registered in Georgia (registration number: [TODO]). TapReply helps you prepare replies to reviews using AI, including translations.',
            'The service is in early access. Features may change, and there may be interruptions.',
          ],
        },
        {
          h: 'Your responsibility for replies',
          p: [
            'AI prepares drafts only. You review, edit and publish replies yourself and are responsible for their content. Please check drafts — AI can make mistakes.',
            'You publish replies on third-party platforms under their own rules. TapReply is not affiliated with Google, Yandex, 2GIS, Tripadvisor, Booking.com, TheFork, Meta or other platforms.',
          ],
        },
        {
          h: 'Acceptable use',
          p: [
            'Do not use TapReply to create fake reviews, to mislead guests, to harass anyone or to break platform rules or the law.',
          ],
        },
        {
          h: 'Payment',
          p: [
            'Free use is limited as described on the Pricing page. Paid plans during the pilot are billed by invoice; there are no automatic card charges during the pilot. Prices are early-access prices and may change with advance notice.',
          ],
        },
        {
          h: 'Liability',
          p: [
            'The service is provided “as is” during early access. To the extent permitted by law, our liability is limited to the amount you paid us in the three months before the claim.',
          ],
        },
        {
          h: 'Termination',
          p: ['You can stop using TapReply at any time and ask us to delete your data. We may suspend accounts that break these terms.'],
        },
        {
          h: 'Contact',
          p: ['Questions about these terms: ceo@ankosoftlab.com.'],
        },
      ],
    },

    segments: {
      restaurants: {
        title: 'TapReply for restaurants, cafés and bars',
        description:
          'Answer tourist reviews on Google, Yandex Maps, 2GIS, Tripadvisor and TheFork in the guest’s language — from your phone, between orders. Early access.',
        kicker: 'For restaurants, cafés & bars',
        h1: 'Answer every guest — between two orders.',
        lead: 'Tourists review you in German, Hebrew or Korean on five different platforms. TapReply puts them in one feed and drafts a reply in the guest’s language in seconds — you just check and send.',
        pains: [
          {
            title: 'Reviews in languages you don’t read',
            text: 'A guest from abroad writes a detailed review — and you can’t be sure what they liked or what went wrong.',
          },
          {
            title: 'Too many platforms',
            text: 'Google, Yandex Maps, 2GIS, Tripadvisor, TheFork — each with its own app and its own notifications.',
          },
          {
            title: 'No time during service',
            text: 'Replies get postponed until “later”, and later never comes. Unanswered negative reviews stay at the top.',
          },
        ],
        how: [
          {
            title: 'One feed for the floor',
            text: 'New and negative reviews from every platform in one list on your phone. Google via the official API is in preparation; others via notification e-mails or paste.',
          },
          {
            title: 'Tourist Shield',
            text: 'The review translated for you, a reply in the guest’s language, and a translation of that reply — so you know exactly what you publish.',
          },
          {
            title: 'Ten seconds, one thumb',
            text: 'The draft mentions the dish or the waiter the guest wrote about. You approve, copy and paste — nothing goes out without you.',
          },
        ],
        example: {
          platform: 'Typical mix for a city-centre café: Google, Yandex Maps, 2GIS, Tripadvisor.',
          note: 'On Yandex Maps the reply is drafted in Russian, as the platform expects — with a translation for you if needed.',
        },
        ctaTitle: 'Run a café, restaurant or bar with guests from abroad?',
        ctaText: 'Join the pilot — we will set up your platforms and your venue’s tone together.',
      },
      hotels: {
        title: 'TapReply for guest houses and small hotels',
        description:
          'Reply to long Booking.com, Tripadvisor and Google reviews from guests of many countries — in their language, with a translation for you. No passwords.',
        kicker: 'For guest houses & small hotels',
        h1: 'Long reviews, many languages — one calm reply.',
        lead: 'Your guests come from everywhere and write detailed reviews about the room, the breakfast and the host. TapReply helps you answer each one personally, in their language, without spending your evening on it.',
        pains: [
          {
            title: 'Long, detailed reviews',
            text: 'Guests write paragraphs about check-in, cleanliness and breakfast. A good reply has to address the specifics.',
          },
          {
            title: 'Guests from many countries',
            text: 'German, French, Hebrew, Polish, Chinese — machine translation alone doesn’t tell you whether your reply sounds right.',
          },
          {
            title: 'Reviews influence bookings',
            text: 'Future guests read how the host responds, especially to criticism. Silence or a template reply costs trust.',
          },
        ],
        how: [
          {
            title: 'Booking, Tripadvisor, Google in one place',
            text: 'Forward notification e-mails or paste the review. Google via the official API is in preparation. We never ask for your extranet password.',
          },
          {
            title: 'A personal reply, point by point',
            text: 'The draft thanks for what the guest liked and calmly addresses each complaint — in your tone, in the guest’s language.',
          },
          {
            title: 'You stay in control',
            text: 'Read the translation of your reply, adjust a detail, then paste it into the extranet yourself. AI only drafts.',
          },
        ],
        example: {
          platform: 'Typical mix for a guest house: Booking.com, Tripadvisor, Google.',
          note: 'Booking.com and Tripadvisor reviews come in via notification e-mails or paste; you publish the reply in their business accounts.',
        },
        ctaTitle: 'Host guests from many countries?',
        ctaText: 'Become a pilot venue — personal onboarding and preferential early pricing.',
      },
    },

    notFound: {
      title: 'Page not found — TapReply',
      description: 'This page does not exist.',
      h1: 'This page doesn’t exist.',
      text: 'The link may be old or mistyped. Let’s get you back.',
      home: 'Go to the home page',
    },
  },
};

export type Dict = typeof en;
