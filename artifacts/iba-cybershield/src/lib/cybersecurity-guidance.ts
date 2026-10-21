type GuidanceTopic = {
  phrases: string[];
  answer: string;
  priority?: number;
};

const topics: GuidanceTopic[] = [
  {
    phrases: [
      'make my account safer', 'make my accounts safer', 'secure my account',
      'secure my accounts', 'account security', 'protect my email account',
      'secure my email', 'improve account security',
    ],
    priority: 1,
    answer: 'Start with the account that can reset your other passwords—usually your email.\n\n1. Use a unique password for every important account; a password manager can help.\n2. Turn on multi-factor authentication and keep recovery codes private.\n3. Review recent sign-ins, signed-in devices, recovery email addresses, and phone numbers.\n4. Remove access for apps or devices you no longer use, and keep your recovery contact details current.\n5. Never share a password or one-time code with someone who contacts you.',
  },
  {
    phrases: [
      'account hacked', 'my account was hacked', 'someone hacked my account',
      'account compromised', 'someone logged in', 'unauthorized login',
      'strange sign in', 'unknown device signed in', 'account taken over',
      'my email was hacked', 'my social media was hacked',
    ],
    priority: 5,
    answer: 'If you think an account was taken over, use its official app or website—not a link in a message.\n\n1. Change the password. If you can’t sign in, use the provider’s official account-recovery process.\n2. Secure the email account connected to it, since email can be used to reset other passwords.\n3. Turn on multi-factor authentication, sign out other sessions, and remove unfamiliar recovery details or devices.\n4. Check recent activity and tell your contacts if someone may have sent messages from your account.\n5. If it is an IBA account, contact official IBA IT support promptly.',
  },
  {
    phrases: [
      'entered my password', 'typed my password into', 'shared my password',
      'gave them my password', 'put my password in', 'entered my login details',
      'entered my credentials', 'password on a fake website', 'password on a suspicious link',
      'shared an otp', 'shared my otp', 'gave someone my code',
      'shared a verification code', 'sent my one time code', 'entered a one time code',
      'gave them a login code', 'shared my recovery code',
    ],
    priority: 6,
    answer: 'Treat a password or verification code you shared as exposed. Act through the official account site or app.\n\n1. Change the password immediately. Change it anywhere else you reused it, starting with your email account.\n2. If you shared a sign-in code, check account activity and sign out other sessions; contact the provider if you cannot regain control.\n3. Turn on multi-factor authentication and review recovery email addresses, phone numbers, and trusted devices.\n4. Do not reply to the person or share any more codes. A real support agent should not ask you to read out a one-time code.\n5. If money or an IBA account is involved, contact your bank or official IBA IT support right away.',
  },
  {
    phrases: [
      'phishing', 'phishing email', 'phishing message', 'spot a scam message',
      'fake email', 'suspicious email', 'suspicious message', 'fake text message',
      'text scam', 'smishing', 'email scam', 'is this message real',
      'signs of a scam', 'signs of phishing', 'verify my account message',
      'message asking for my password',
    ],
    answer: 'Pause before replying, opening an attachment, or following a link. Common warning signs include unexpected urgency, prizes or threats, an unfamiliar sender, odd wording, and requests for passwords, payment, or one-time codes.\n\nCheck the sender and destination carefully, but remember that names and logos can be copied. Open the organization’s official app or type its known website address yourself to verify the claim. Report or block the message in the service where it arrived. If it appears to target an IBA account, contact IBA through a known official channel.',
  },
  {
    phrases: [
      'scholarship scam', 'fake scholarship', 'scholarship link', 'scholarship message',
      'whatsapp scholarship', 'job offer scam', 'fake internship', 'internship scam',
      'recruitment scam', 'fake job offer', 'pay a fee for a job',
    ],
    answer: 'Treat an unexpected scholarship, internship, or job offer as unverified until you check it independently.\n\n1. Don’t pay an application or processing fee, open unexpected files, or share a password or verification code.\n2. Find the organization’s official website and contact details yourself; confirm the offer there.\n3. Be cautious of guaranteed awards, pressure to act quickly, personal email addresses, and forms requesting sensitive details.\n4. Report the message in the app where you received it. If you already shared account or payment details, use the account or payment provider’s official recovery steps.',
  },
  {
    phrases: [
      'clicked a suspicious link', 'clicked on a suspicious link', 'clicked a phishing link',
      'clicked a fake link', 'opened a suspicious link', 'opened a phishing link',
      'downloaded a suspicious file', 'opened an unexpected attachment',
      'clicked a link in a scam', 'what if i clicked a link',
    ],
    priority: 4,
    answer: 'If you only opened the page, close it and don’t enter information, allow notifications, or download anything. A click by itself does not always mean your device or account was compromised.\n\nIf you entered a password or code, change the password through the official service and review its sign-in activity. If you downloaded or opened a file, don’t open it again; run the device’s built-in security scan and ask trusted IT support for help if you notice unusual behavior. If payment details were entered, contact your bank using the number on your card or its official app.',
  },
  {
    phrases: [
      'qr code scam', 'malicious qr code', 'fake qr code', 'quishing',
      'scan a qr code safely', 'qr code link',
    ],
    answer: 'A QR code can hide the website address it opens, so treat an unexpected one like an unfamiliar link.\n\nCheck the destination shown by your camera before opening it. Be wary of stickers placed over legitimate codes, payment requests, login pages, or urgent notices. For payments and sign-ins, open the official app yourself instead of scanning a code from an unsolicited message or poster. If you entered a password after scanning, change it using the official site or app.',
  },
  {
    phrases: [
      'strong password', 'make a password', 'password strength', 'password manager',
      'password reuse', 'reuse passwords', 'same password everywhere',
      'unique passwords', 'passkey', 'secure my passwords',
    ],
    answer: 'Use a different, long password for every important account. A password manager can create and remember unique passwords so you don’t have to reuse them. Protect the manager itself with a strong master password and multi-factor authentication where available.\n\nTurn on multi-factor authentication for email, banking, and social accounts. Never share passwords or one-time codes, and don’t save them in a shared or public device. If a service supports passkeys, they can be a safer, phishing-resistant sign-in option.',
  },
  {
    phrases: [
      '2fa', 'two factor', 'two step verification', 'multi factor authentication',
      'multifactor authentication', 'mfa', 'authenticator app', 'turn on verification',
      'enable two step', 'one time password', 'one time code', 'verification code',
      'backup codes', 'recovery codes', 'someone asked for my otp',
    ],
    answer: 'Multi-factor authentication (also called 2FA or MFA) adds a second check when you sign in.\n\n1. Open the service’s official app or website directly and find Security or Sign-in settings.\n2. Follow its steps to set up an authenticator app, passkey, or another supported method.\n3. Store recovery codes somewhere private and separate from your phone.\n4. Never share a one-time code with anyone who contacts you—even if they claim to be support.\n\nIf the option is missing for an IBA account, ask official IBA IT support for the correct setup instructions.',
  },
  {
    phrases: [
      'public wifi', 'public wi fi', 'airport wifi', 'cafe wifi',
      'school wifi safety', 'wifi security', 'secure my router',
      'home wifi password', 'vpn on public wifi', 'open wifi network',
    ],
    answer: 'On public Wi-Fi, connect only to the network name confirmed by the venue; fake hotspots can imitate real ones. Keep your device and browser updated, use sites and apps you trust, and avoid sensitive transactions on networks you don’t trust. A VPN can protect traffic between your device and the VPN provider, but it does not make a fake website safe.\n\nAt home, change the router’s default admin password, use WPA2 or WPA3 security, install router updates, and use a unique Wi-Fi password. Turn off features you don’t use, such as remote administration.',
  },
  {
    phrases: [
      'phone stolen', 'lost my phone', 'lost my laptop', 'device stolen',
      'lost device', 'someone took my phone', 'laptop missing',
    ],
    priority: 3,
    answer: 'Use another trusted device to protect your accounts and the missing device.\n\n1. Use the manufacturer’s official find-my-device service to locate or remotely lock it; erase it if you believe it cannot be recovered and your data is at risk.\n2. Change the password for your main email account and other important accounts, then sign out the missing device from account settings.\n3. Contact your mobile provider to suspend a missing SIM and your bank if payment apps or cards may be exposed.\n4. Tell your school or workplace IT team if it contained their data. Don’t meet anyone alone to recover a device.',
  },
  {
    phrases: [
      'protect my phone', 'secure my phone', 'protect my laptop',
      'secure my device', 'keep my device safe', 'phone security',
      'device security',
    ],
    answer: 'Use a screen lock with a PIN or passcode, and enable device-finding and remote-lock features. Install operating-system and app updates from official settings or app stores. Download apps only from sources you trust, review app permissions, and remove apps you no longer use. Back up important files and use a unique password plus multi-factor authentication for accounts linked to the device.',
  },
  {
    phrases: [
      'virus on my computer', 'phone has a virus', 'malware on my device',
      'my phone has malware', 'phone malware',
      'computer infected', 'phone infected', 'ransomware', 'malware',
      'pop up says my device is infected', 'remove a virus',
    ],
    answer: 'Don’t call a number shown in a pop-up or install a “cleaner” it recommends. Close the page or browser. If files are being encrypted or the device is behaving unusually, disconnect it from Wi-Fi and other networks, but don’t delete evidence or pay a demand without getting trusted help.\n\nRun the device’s built-in security scan, install updates from the official settings, and remove apps you don’t recognize. Change important passwords from a different trusted device. For a school-owned device or suspected ransomware, contact IT support before trying repairs.',
  },
  {
    phrases: [
      'software updates', 'system update', 'update my phone', 'security update',
      'automatic updates', 'update my apps', 'why update software',
    ],
    answer: 'Updates often fix security weaknesses. Turn on automatic updates for your operating system, browser, and apps when practical. Install updates using the device’s official settings or the app’s official store—not a link in an unexpected message. Restart when an update requires it, and stop using software that no longer receives security updates if you can replace it.',
  },
  {
    phrases: [
      'backup my files', 'back up my phone', 'backups', 'ransomware backup',
      'recover deleted files', 'protect my photos', 'cloud backup',
    ],
    answer: 'Keep another copy of important files so a lost, damaged, or infected device does not erase the only copy. Use a trusted cloud backup or an external drive; disconnect the drive when you are not backing up so malware cannot easily reach it. Protect cloud accounts with a unique password and multi-factor authentication. Periodically check that you can restore a file from the backup.',
  },
  {
    phrases: [
      'online shopping scam', 'fake online store', 'safe online shopping',
      'payment scam', 'sent money to a scammer', 'bank details stolen',
      'card details on a fake site', 'refund scam', 'investment scam',
    ],
    priority: 3,
    answer: 'Before paying, check the seller independently, review the exact web address, and be cautious of unusually low prices, pressure, or requests to pay by gift card, crypto, or direct transfer. Use a payment method with buyer protections where possible, and don’t save card details on an unfamiliar site.\n\nIf you already paid or shared card details, contact your bank promptly through its official app or the number on your card. Change any exposed password and keep receipts and messages for a report.',
  },
  {
    phrases: [
      'data breach', 'my data was leaked', 'password leaked',
      'personal information exposed', 'email in a breach', 'check if my account was breached',
      'identity theft', 'someone used my personal information',
    ],
    priority: 3,
    answer: 'If a service reports a breach, use its official website or app to find out what was exposed. Change the affected password and every reused copy, starting with email. Turn on multi-factor authentication, review recent sign-ins, and be alert for follow-up messages that use leaked details to sound convincing.\n\nIf financial or identity information may have been exposed, contact your bank or the relevant official authority using contact details you find independently. Don’t follow “breach check” links in unexpected messages.',
  },
  {
    phrases: [
      'privacy settings', 'protect my privacy online', 'social media privacy',
      'location sharing', 'share my location', 'oversharing online',
      'personal information online', 'doxxing', 'private information on social media',
      'protect my personal data', 'protect my phone and personal data',
    ],
    answer: 'Review who can see your posts, profile details, friends list, and location. Share your live location only with people you trust and only for as long as needed. Avoid posting details that could help someone guess passwords or security answers, such as birthdays, travel plans, or identifying documents.\n\nCheck app permissions and connected third-party apps, remove access you no longer need, and use separate strong passwords with multi-factor authentication. If private information is posted without permission, report it to the platform and save evidence before requesting removal.',
  },
  {
    phrases: [
      'safe website', 'https', 'padlock icon', 'website address',
      'check a link', 'is this website safe', 'fake website',
      'website looks real', 'domain name',
    ],
    answer: 'Check the full website address, not just the logo or page design. Look for misspellings, extra words, or a domain that does not match the organization. A padlock or HTTPS means the connection is encrypted; it does not prove the site belongs to the organization you expect.\n\nFor banking, student portals, and sign-ins, open the official app or type the address you already know. Don’t enter a password after following an unexpected link. This chat cannot open or scan links.',
  },
  {
    phrases: [
      'email attachment', 'unexpected attachment', 'downloaded a file',
      'safe to download', 'unknown file', 'file from an email',
      'attachment from a stranger', 'macro in a document',
    ],
    answer: 'If you weren’t expecting a file, verify it with the sender through another channel before opening it. Be especially cautious of documents asking you to enable macros, install software, or sign in again. Download apps only from the developer’s official site or your device’s official app store.\n\nIf you opened a suspicious file, stop interacting with it, run your device’s built-in security scan, and contact IT support if it is a school or work device. If you typed a password into a page it opened, change that password through the official service.',
  },
  {
    phrases: [
      'share files securely', 'cloud file sharing', 'shared google drive',
      'document link permissions', 'anyone can view my file',
      'sharing personal documents', 'cloud account security',
    ],
    answer: 'Before sharing a document, check its access list and choose the narrowest permission needed—specific people rather than “anyone with the link” when possible. Give view access instead of edit access unless editing is required. Remove access after the collaboration ends, and avoid public links for personal or school records.\n\nProtect the cloud account with a unique password and multi-factor authentication. If a link was shared too widely, turn off link access and review the activity or version history.',
  },
  {
    phrases: [
      'cyberbullying', 'online harassment', 'threats online',
      'someone is harassing me online', 'impersonating me online',
      'fake account of me', 'blackmail online', 'online extortion',
    ],
    answer: 'You do not have to handle online harassment alone. Save screenshots, usernames, dates, and message links before blocking the account. Report it to the platform, tighten privacy settings, and tell someone you trust or your school support team. Avoid responding to threats or sending money or more images.\n\nIf there is an immediate threat to your safety, contact local emergency services or law enforcement. If intimate images or a minor are involved, seek help from a trusted adult and the appropriate official reporting service promptly.',
  },
  {
    phrases: [
      'ai deepfake', 'deepfake video', 'fake voice call',
      'ai generated scam', 'voice clone scam', 'verify a video',
      'someone cloned my voice', 'fake profile using ai',
    ],
    answer: 'A familiar voice, video, or profile can be faked or taken over. Verify surprising requests for money, codes, or private information through a separate channel—call the person using a number you already know, or ask a question only they would know. Don’t rely on caller ID, a profile photo, or urgency as proof. Report impersonation to the service and warn affected contacts.',
  },
  {
    phrases: [
      'report a cyber incident', 'report phishing', 'report a scam',
      'who do i contact', 'report suspicious email', 'report hacked account',
      'report online fraud', 'tell it support',
    ],
    answer: 'Keep the message, sender details, date, and screenshots if it is safe to do so. Use the service’s built-in report option and contact your bank immediately if money or payment details are involved. For an IBA account or device, contact official IBA IT support using contact details from a known IBA source.\n\nFor threats, identity theft, or financial fraud, use the appropriate official reporting channel in your location. Don’t use phone numbers or links supplied by the suspicious sender.',
  },
  {
    phrases: [
      'what is cybersecurity', 'what is cyber security', 'cybersecurity awareness',
      'cyber security awareness', 'cyber safety', 'stay safe online',
      'protect myself online', 'general cyber security tips', 'cybersecurity tips',
      'online safety tips',
    ],
    answer: 'Cybersecurity is the practice of protecting accounts, devices, and information from misuse. A few habits prevent many common problems:\n\n1. Use unique passwords and multi-factor authentication, especially for email.\n2. Pause before opening unexpected links, files, QR codes, or requests for money or codes.\n3. Keep your devices and apps updated; back up important files.\n4. Limit what you share and review privacy and app-permission settings.\n5. If something goes wrong, use official recovery and reporting channels quickly.',
  },
];

function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/\bwi[\s-]?fi\b/g, 'wifi')
    .replace(/\btwo[\s-]?factor\b/g, 'two factor')
    .replace(/\btwo[\s-]?step\b/g, 'two step')
    .replace(/\bmulti[\s-]?factor\b/g, 'multi factor')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/\bpasswords\b/g, 'password')
    .replace(/\baccounts\b/g, 'account')
    .replace(/\bdevices\b/g, 'device')
    .replace(/\blinks\b/g, 'link')
    .replace(/\bmessages\b/g, 'message')
    .replace(/\bcodes\b/g, 'code')
    .replace(/\bscams\b/g, 'scam')
    .replace(/\bupdates\b/g, 'update')
    .replace(/\bbackups\b/g, 'backup')
    .replace(/\battachments\b/g, 'attachment')
    .replace(/\bfiles\b/g, 'file');
}

function isRequestToHarmOthers(question: string): boolean {
  return [
    /\b(?:hack|break into|get into|take over|spy on)\s+(?:someone|somebody|another person|their)\b/,
    /\b(?:steal|phish)\s+(?:someone(?:'s)?|somebody(?:'s)?|another person's|their)\s*(?:password|account|code|data|money|credentials)\b/,
    /\b(?:make|create|build|deploy|write)\s+(?:a\s+)?(?:phishing kit|keylogger|ransomware|malware|credential stealer)\b/,
    /\b(?:bypass|evade)\s+(?:2fa|mfa|multi factor|two factor|authentication|security|antivirus)\b/,
    /\b(?:ddos|denial of service)\s+(?:attack|someone|a website|a server)\b/,
    /\bcrack\s+(?:someone(?:'s)?|their)\s+(?:password|wifi|account)\b/,
  ].some((pattern) => pattern.test(question));
}

export function getCybersecurityGuidance(question: string): string {
  const normalized = normalize(question);

  if (isRequestToHarmOthers(normalized)) {
    return 'I can’t help break into accounts, bypass security, steal information, or create tools to target someone. If you’re trying to protect your own account or device, tell me what happened and I can suggest safe recovery steps.';
  }

  const paddedQuestion = ` ${normalized} `;
  let bestTopic: GuidanceTopic | undefined;
  let bestScore = 0;

  for (const topic of topics) {
    const matches = topic.phrases.filter((phrase) => {
      const normalizedPhrase = normalize(phrase);
      return paddedQuestion.includes(` ${normalizedPhrase} `);
    });
    if (matches.length === 0) continue;

    const score = matches.reduce((total, phrase) => {
      return total + 2 + normalize(phrase).split(' ').length * 2;
    }, topic.priority ?? 0);

    if (score > bestScore) {
      bestTopic = topic;
      bestScore = score;
    }
  }

  if (bestTopic) return bestTopic.answer;

  return 'I can help with everyday cybersecurity awareness, including account security, passwords, suspicious messages and links, scams, privacy, devices, Wi-Fi, payments, backups, and what to do after an incident. Try describing the situation in a little more detail. For an urgent account or device issue, contact the service or your school’s official IT support directly.';
}
