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
      'secure my email', 'improve account security', 'protect my accounts',
      'keep my account safe', 'account protection', 'email account safety',
    ],
    priority: 1,
    answer: 'Start with the account that can reset your other passwords—usually your email.\n\n1. Use a unique password for every important account; a password manager can help.\n2. Turn on multi-factor authentication and keep recovery codes private.\n3. Review recent sign-ins, signed-in devices, recovery email addresses, and phone numbers.\n4. Remove access for apps or devices you no longer use, and keep your recovery contact details current.\n5. Never share a password or one-time code with someone who contacts you.',
  },
  {
    phrases: [
      'account hacked', 'my account was hacked', 'someone hacked my account',
      'account compromised', 'someone logged in', 'unauthorized login',
      'strange sign in', 'unknown device signed in', 'account taken over',
      'my email was hacked', 'my social media was hacked', 'my account got hacked',
      'someone accessed my account', 'unusual sign in', 'cant access my account',
      'instagram hacked', 'facebook hacked', 'whatsapp account hacked',
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
      'gave them a login code', 'shared my recovery code', 'shared my password with someone',
      'my password got leaked', 'my password was stolen', 'i gave away my login',
      'entered my password on a fake page', 'someone has my password',
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
      'message asking for my password', 'is this email legitimate',
      'is this email legit', 'is this text a scam', 'how to spot phishing',
      'how can i tell if an email is fake', 'fake bank message', 'suspicious sms',
      'what is phishing', 'phishing definition', 'what does phishing mean',
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
      'clicked a link in a scam', 'what if i clicked a link', 'clicked a suspicious website',
      'i clicked on a link', 'opened a suspicious website',
    ],
    priority: 4,
    answer: 'If you only opened the page, close it and don’t enter information, allow notifications, or download anything. A click by itself does not always mean your device or account was compromised.\n\nIf you entered a password or code, change the password through the official service and review its sign-in activity. If you downloaded or opened a file, don’t open it again; run the device’s built-in security scan and ask trusted IT support for help if you notice unusual behavior. If payment details were entered, contact your bank using the number on your card or its official app.',
  },
  {
    phrases: [
      'qr code scam', 'malicious qr code', 'fake qr code', 'quishing',
      'scan a qr code safely', 'qr code link', 'is it safe to scan a qr code',
      'qr code phishing', 'fake payment qr code',
    ],
    answer: 'A QR code can hide the website address it opens, so treat an unexpected one like an unfamiliar link.\n\nCheck the destination shown by your camera before opening it. Be wary of stickers placed over legitimate codes, payment requests, login pages, or urgent notices. For payments and sign-ins, open the official app yourself instead of scanning a code from an unsolicited message or poster. If you entered a password after scanning, change it using the official site or app.',
  },
  {
    phrases: [
      'strong password', 'make a password', 'password strength', 'password manager',
      'password reuse', 'reuse passwords', 'same password everywhere',
      'unique passwords', 'passkey', 'secure my passwords', 'what makes a password strong',
      'how should i store passwords', 'password security', 'passwordless login',
      'password', 'how to choose a password', 'password tips',
    ],
    answer: 'Use a different, long password for every important account. A password manager can create and remember unique passwords so you don’t have to reuse them. Protect the manager itself with a strong master password and multi-factor authentication where available.\n\nTurn on multi-factor authentication for email, banking, and social accounts. Never share passwords or one-time codes, and don’t save them in a shared or public device. If a service supports passkeys, they can be a safer, phishing-resistant sign-in option.',
  },
  {
    phrases: [
      '2fa', 'two factor', 'two step verification', 'multi factor authentication',
      'multifactor authentication', 'mfa', 'authenticator app', 'turn on verification',
      'enable two step', 'one time password', 'one time code', 'verification code',
      'backup codes', 'recovery codes', 'someone asked for my otp', 'what is 2fa',
      'what is mfa', 'what is two factor authentication', 'someone asked me for a code',
      'mfa fatigue', 'repeated login approval requests',
    ],
    answer: 'Multi-factor authentication (also called 2FA or MFA) adds a second check when you sign in.\n\n1. Open the service’s official app or website directly and find Security or Sign-in settings.\n2. Follow its steps to set up an authenticator app, passkey, or another supported method.\n3. Store recovery codes somewhere private and separate from your phone.\n4. Never share a one-time code with anyone who contacts you—even if they claim to be support.\n\nIf the option is missing for an IBA account, ask official IBA IT support for the correct setup instructions.',
  },
  {
    phrases: [
      'public wifi', 'public wi fi', 'airport wifi', 'cafe wifi',
      'school wifi safety', 'wifi security', 'secure my router',
      'home wifi password', 'vpn on public wifi', 'open wifi network',
      'how to secure wifi', 'wifi password security', 'is public wifi safe',
      'use internet at a cafe', 'hotel wifi safety', 'connect to public wifi',
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
      'online payment safety', 'payment link scam', 'fake bank call',
      'someone wants me to transfer money', 'money mule',
    ],
    priority: 3,
    answer: 'Before paying, check the seller independently, review the exact web address, and be cautious of unusually low prices, pressure, or requests to pay by gift card, crypto, or direct transfer. Use a payment method with buyer protections where possible, and don’t save card details on an unfamiliar site.\n\nIf you already paid or shared card details, contact your bank promptly through its official app or the number on your card. Change any exposed password and keep receipts and messages for a report.',
  },
  {
    phrases: [
      'data breach', 'my data was leaked', 'password leaked',
      'personal information exposed', 'email in a breach', 'check if my account was breached',
      'identity theft', 'someone used my personal information',
      'my information was exposed', 'my email got leaked', 'stolen identity',
      'someone opened an account in my name',
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
      'digital footprint', 'what is a digital footprint', 'stop tracking me online',
      'protect my identity online', 'who can see my profile',
    ],
    answer: 'Review who can see your posts, profile details, friends list, and location. Share your live location only with people you trust and only for as long as needed. Avoid posting details that could help someone guess passwords or security answers, such as birthdays, travel plans, or identifying documents.\n\nCheck app permissions and connected third-party apps, remove access you no longer need, and use separate strong passwords with multi-factor authentication. If private information is posted without permission, report it to the platform and save evidence before requesting removal.',
  },
  {
    phrases: [
      'safe website', 'https', 'padlock icon', 'website address',
      'check a link', 'is this website safe', 'fake website',
      'website looks real', 'domain name', 'is this link safe',
      'is this website legitimate', 'how to check a website', 'secure website connection',
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
      'someone is threatening me online', 'someone made a fake profile of me',
    ],
    answer: 'You do not have to handle online harassment alone. Save screenshots, usernames, dates, and message links before blocking the account. Report it to the platform, tighten privacy settings, and tell someone you trust or your school support team. Avoid responding to threats or sending money or more images.\n\nIf there is an immediate threat to your safety, contact local emergency services or law enforcement. If intimate images or a minor are involved, seek help from a trusted adult and the appropriate official reporting service promptly.',
  },
  {
    phrases: [
      'ai deepfake', 'deepfake video', 'fake voice call',
      'ai generated scam', 'voice clone scam', 'verify a video',
      'someone cloned my voice', 'fake profile using ai', 'deepfake scam',
      'fake audio message', 'is this video real',
    ],
    answer: 'A familiar voice, video, or profile can be faked or taken over. Verify surprising requests for money, codes, or private information through a separate channel—call the person using a number you already know, or ask a question only they would know. Don’t rely on caller ID, a profile photo, or urgency as proof. Report impersonation to the service and warn affected contacts.',
  },
  {
    phrases: [
      'report a cyber incident', 'report phishing', 'report a scam',
      'who do i contact', 'report suspicious email', 'report hacked account',
      'report online fraud', 'tell it support', 'where to report cybercrime',
      'report a cybercrime', 'report a hacked account',
    ],
    answer: 'Keep the message, sender details, date, and screenshots if it is safe to do so. Use the service’s built-in report option and contact your bank immediately if money or payment details are involved. For an IBA account or device, contact official IBA IT support using contact details from a known IBA source.\n\nFor threats, identity theft, or financial fraud, use the appropriate official reporting channel in your location. Don’t use phone numbers or links supplied by the suspicious sender.',
  },
  {
    phrases: [
      'social engineering', 'what is social engineering', 'pretexting',
      'baiting attack', 'impersonation attack', 'human hacking',
      'someone is manipulating me online',
    ],
    answer: 'Social engineering is when someone manipulates a person into sharing information, sending money, or granting access. They may pretend to be a trusted person, create urgency, offer a reward, or ask you to keep a request secret.\n\nPause and verify through a separate channel you find yourself. Don’t share passwords, one-time codes, or private files. For an unexpected payment or account request, contact the person or organization using a number or address you already trust.',
  },
  {
    phrases: [
      'vishing', 'voice phishing', 'scam phone call', 'scam call',
      'caller id spoofing', 'spoofed phone call', 'fake support call',
      'phone call asking for my password', 'phone call asking for a code',
    ],
    answer: 'A caller can fake the name or number shown on your screen. If someone calls unexpectedly and asks for a password, one-time code, payment, or remote access to your device, hang up. Find the organization’s official number independently and call back if you need to verify the request. Don’t install remote-access software at a caller’s direction.',
  },
  {
    phrases: [
      'sim swap', 'sim swapping', 'sim hijacking', 'phone number hijacked',
      'my sim stopped working suddenly', 'someone took over my phone number',
      'unauthorized sim replacement',
    ],
    priority: 3,
    answer: 'A SIM-swap scam moves your phone number to a SIM controlled by someone else, which may let them receive text-message codes. If your phone unexpectedly loses service, contact your mobile provider using its official number or app and ask whether a SIM change was made.\n\nSecure your email and financial accounts from a trusted device, change exposed passwords, review sign-ins, and contact your bank if payment accounts may be affected. Ask your provider about an account PIN or port-out protection. Where available, use an authenticator app or passkey instead of SMS for important accounts.',
  },
  {
    phrases: [
      'tech support scam', 'fake technical support', 'fake microsoft support',
      'fake apple support', 'computer support scam', 'pop up phone number',
      'someone wants remote access to my computer',
    ],
    answer: 'Unexpected pop-ups and callers may pretend your device is infected to pressure you into paying or installing remote-access software. Don’t call numbers in pop-ups, grant remote access, or share payment details. Close the page or browser; if it will not close, use your device’s normal force-quit controls.\n\nGet help by opening the manufacturer’s official support site yourself. If you already gave access, disconnect from the internet, remove the remote-access app if safe, run a security scan, change important passwords from another trusted device, and contact your bank if you paid.',
  },
  {
    phrases: [
      'romance scam', 'romance fraud', 'dating app scam', 'online dating scam',
      'marketplace scam', 'buyer scam', 'seller scam', 'delivery text scam',
      'package delivery scam', 'fake parcel fee', 'crypto investment scam',
      'cryptocurrency scam', 'fake crypto platform',
    ],
    answer: 'Scammers may build trust, invent an emergency, or claim a parcel, investment, or sale requires an extra fee. Be cautious if someone you have not met asks for money, gift cards, cryptocurrency, banking details, or secrecy. Verify purchases and delivery notices through the company’s official app or website, not a message link.\n\nIf you already sent money, contact your bank or payment service promptly through its official channel. Save messages and receipts, block and report the account, and be wary of anyone who promises to recover the money for another fee.',
  },
  {
    phrases: [
      'reset my password safely', 'password reset email', 'password reset link',
      'account recovery', 'recover my account', 'forgot my password',
      'someone changed my recovery email', 'secure account recovery',
    ],
    answer: 'Start account recovery from the service’s official app or by typing its known web address yourself. Check the full address before entering a password or recovery code. Never forward a reset link or share a recovery code with someone who contacts you.\n\nAfter you regain access, choose a unique password, turn on multi-factor authentication, review recovery email addresses and phone numbers, sign out other sessions, and remove unfamiliar devices or connected apps. If this is an IBA account, contact official IBA IT support if recovery fails.',
  },
  {
    phrases: [
      'what is malware', 'malware definition', 'what is a computer virus',
      'virus vs malware', 'what is spyware', 'what is a trojan',
      'what is adware', 'types of malware', 'what is a worm virus',
      'malware', 'virus', 'spyware', 'trojan', 'adware',
    ],
    answer: 'Malware means software designed to harm a device, spy on activity, or access information without permission. A virus attaches to files, a Trojan pretends to be legitimate software, spyware secretly collects information, and ransomware blocks or encrypts files to demand payment.\n\nReduce risk by updating devices, using built-in security protections, downloading apps only from trusted sources, and keeping backups. Don’t open unexpected attachments or install “fixes” from pop-ups. If you suspect infection, stop using the device for sensitive accounts and ask trusted IT support for help.',
  },
  {
    phrases: [
      'what is ransomware', 'ransomware meaning', 'how does ransomware work',
      'ransomware definition', 'what to do about ransomware',
    ],
    answer: 'Ransomware is malware that can lock a device or encrypt files and demand payment. It may arrive through a malicious attachment, stolen sign-in, or unsafe download. Paying does not guarantee that files will be restored or private data deleted.\n\nIf you suspect an attack, disconnect the affected device from networks, don’t connect backup drives, and contact your school or workplace IT team or a trusted professional. Preserve the message or demand for reporting. Restore files only from a clean backup after the device has been safely checked.',
  },
  {
    phrases: [
      'what is a zero day', 'zero day vulnerability', 'what is an exploit',
      'what is a ddos attack', 'what is denial of service',
      'what is a botnet', 'what is a brute force attack',
      'what is credential stuffing', 'difference between brute force and credential stuffing',
      'common cyber attack types', 'types of cyber attacks', 'zero day',
      'credential stuffing', 'brute force attack', 'botnet', 'exploit',
      'ddos', 'denial of service', 'what is a vulnerability',
      'vulnerability meaning', 'software vulnerability',
    ],
    answer: 'These are broad security terms: a vulnerability is a flaw in software or configuration; a zero-day is a weakness not yet fixed or widely known to the vendor; an exploit is a method that takes advantage of a weakness; a botnet is a group of compromised devices controlled together; a denial-of-service attack tries to make a service unavailable. Brute-force guessing tries many passwords, while credential stuffing tries passwords leaked from other services.\n\nFor personal protection, keep software updated, use unique passwords and multi-factor authentication, and report outages or suspicious account activity to the service. These terms describe risks; testing systems requires clear authorization.',
  },
  {
    phrases: [
      'what is encryption', 'how does encryption work', 'end to end encryption',
      'end-to-end encrypted', 'encrypted messages', 'encryption at rest',
      'encryption in transit', 'is encryption safe', 'encryption',
    ],
    answer: 'Encryption transforms information so it cannot be read without the right key. “In transit” protects data moving between devices and services; “at rest” protects stored data. End-to-end encryption is designed so only the communicating participants’ devices can read message contents, though account metadata or backups may have different protections.\n\nEncryption does not prove who sent a message, prevent scams, or protect a device that is already unlocked or compromised. Keep devices locked, use strong account security, and check the service’s settings for backup and recovery details.',
  },
  {
    phrases: [
      'what does a firewall do', 'what is a firewall', 'firewall meaning',
      'what is antivirus', 'do i need antivirus', 'antivirus vs firewall',
      'built in security protection', 'security software basics', 'firewall',
      'antivirus',
    ],
    answer: 'A firewall helps control network connections to and from a device or network. Antivirus or endpoint protection looks for and blocks known or suspicious software. Neither can guarantee safety or replace careful behavior, updates, and backups.\n\nKeep built-in protections enabled and updated. Install security software only from a trusted vendor or official app store, and ignore pop-ups that claim to be a security scan and ask you to call a number or pay immediately.',
  },
  {
    phrases: [
      'what is a vpn', 'what does a vpn do', 'vpn meaning',
      'should i use a vpn', 'free vpn safety', 'vpn privacy',
      'does vpn make me anonymous', 'vpn on public wifi', 'vpn',
    ],
    answer: 'A VPN creates an encrypted connection between your device and a VPN provider. It can help protect traffic on some untrusted networks, but the VPN provider may see connection information, and a VPN does not make you anonymous or protect you from phishing, malware, or unsafe downloads.\n\nChoose a reputable provider, understand its privacy practices, and use HTTPS and secure account habits as well. Avoid unknown free VPN apps that request broad permissions or promise complete anonymity.',
  },
  {
    phrases: [
      'what are browser cookies', 'what is a cookie online', 'website tracking',
      'browser tracking', 'incognito mode', 'private browsing mode',
      'does incognito hide my activity', 'clear browser cookies', 'cookies',
    ],
    answer: 'Cookies are small pieces of data websites use to remember sign-ins, settings, or activity. Some are needed for a site to work; others can be used for tracking. Private or incognito mode mainly avoids saving browsing history and site data in that browser session—it does not hide activity from websites, your network, school, or internet provider.\n\nReview cookie and tracking choices in your browser, sign out on shared devices, and avoid using private browsing as a substitute for account security.',
  },
  {
    phrases: [
      'secure smart tv', 'smart home security', 'iot security',
      'internet of things security', 'secure my smart camera',
      'smart device security', 'default password on router or camera',
    ],
    answer: 'Internet-connected devices such as cameras, TVs, speakers, and routers need basic account and update protection too.\n\nChange default passwords, use unique credentials, install updates from the manufacturer, and turn off features you do not use. Put devices on a separate guest network if your router supports it. Review microphone, camera, and location permissions, and replace devices that no longer receive security updates.',
  },
  {
    phrases: [
      'usb security', 'unknown usb drive', 'found a usb drive',
      'usb charging safety', 'juice jacking', 'public phone charger',
      'charging station security', 'unknown flash drive',
    ],
    answer: 'Do not plug in a USB drive you found or received unexpectedly; it could contain harmful files. Use your own charger and cable or a trusted power adapter when possible. If you must use a public charging port, a charge-only cable or USB data blocker can reduce data-transfer risk.\n\nIf a device prompts you to trust a computer or share files while charging, decline unless you intentionally connected it to a device you trust.',
  },
  {
    phrases: [
      'public computer safety', 'shared computer safety', 'school computer security',
      'use a library computer safely', 'log out of a public computer',
      'borrowed laptop security', 'save password on shared computer',
      'use a public computer safely', 'public computer', 'using a public computer',
    ],
    answer: 'Avoid signing in to banking or sensitive accounts on a device you do not control. If you must use a shared computer, use a private session if available, never save passwords, and sign out of every account before leaving. Close the browser and remove downloaded files you created, but do not delete files belonging to others.\n\nIf you entered a password on a computer you do not trust, change it from your own device and review the account’s signed-in sessions.',
  },
  {
    phrases: [
      'online gaming safety', 'gaming account hacked', 'secure my gaming account',
      'game account scam', 'free game currency scam', 'gaming phishing',
      'protect my game account',
    ],
    answer: 'Protect game accounts with unique passwords and multi-factor authentication where available. Use only official game stores and websites; “free currency,” skins, or cheat downloads can steal accounts or install malware. Don’t share login details, recovery codes, or account access with people you meet in a game.\n\nReview linked accounts and purchases, use family or privacy controls as needed, and report harassment or suspicious trades through the platform.',
  },
  {
    phrases: [
      'online class security', 'secure a video meeting', 'zoom security',
      'meeting link safety', 'online lecture privacy', 'classroom link scam',
      'protect my video call',
    ],
    answer: 'Join online classes and meetings through a link from a channel you trust. Keep meeting apps updated, avoid posting invite links publicly, and use a waiting room or passcode when you host. Check who can share their screen or record, and do not share a meeting link that contains private access details.\n\nIf someone unexpectedly asks you to install software or sign in again during a meeting, verify the request with your instructor or organizer through a separate channel.',
  },
  {
    phrases: [
      'browser extension safety', 'safe browser extensions', 'unknown browser extension',
      'extension permissions', 'download software safely', 'safe app downloads',
      'fake app store', 'install app from link',
    ],
    answer: 'Install apps and browser extensions from official stores or the developer’s verified website. Check the publisher, recent reviews, update history, and requested permissions. Be cautious if an extension asks to read or change data on every site without a clear reason. Remove extensions you no longer use and avoid “cracked” software or downloads from pop-up ads.',
  },
  {
    phrases: [
      'learn ethical hacking', 'learn cybersecurity legally', 'cybersecurity career',
      'how to become a cybersecurity professional', 'practice penetration testing',
      'ethical hacking labs', 'learn cyber security', 'what is ethical hacking',
    ],
    answer: 'You can learn cybersecurity safely through networking and security fundamentals, beginner courses, capture-the-flag exercises, and intentionally vulnerable practice labs. Only scan, test, or access systems when you own them or have clear written permission and a defined scope. Never test a school, company, public website, or someone else’s account without authorization.\n\nFor a career, build skills in networking, operating systems, secure configuration, incident response, and clear reporting. Keep practice isolated to legal training environments.',
  },
  {
    phrases: [
      'secure my website', 'website security checklist', 'protect a website',
      'secure my web app', 'web application security basics',
      'api security basics', 'protect website admin account',
    ],
    answer: 'For a website or web app you own, start with defensive basics: keep the framework and dependencies patched, enforce HTTPS, protect administrator accounts with unique passwords and multi-factor authentication, and give services only the permissions they need. Keep API keys and passwords out of browser code and public repositories; store secrets in a server-side secret manager.\n\nValidate input on the server, use established security libraries, back up data, monitor for unusual activity, and test only systems you own or are authorized to assess. For a public or business site, use a qualified security review before handling sensitive data.',
  },
  {
    phrases: [
      'securely delete old phone', 'sell my old phone safely',
      'wipe old laptop before selling', 'dispose of a hard drive',
      'recycle old computer securely', 'erase data before donation',
    ],
    answer: 'Before selling, donating, or recycling a device, back up files you need, sign out of accounts, remove SIM and memory cards, and use the manufacturer’s factory-reset or secure-erase instructions. For a computer, use its built-in reset or drive-encryption erase process. Confirm the reset completed before handing it over.\n\nDo not rely on deleting individual files or emptying the trash to erase sensitive data. If the device belongs to a school or employer, ask their IT team before wiping it.',
  },
  {
    phrases: [
      'what is data privacy', 'data minimization', 'least privilege',
      'what does least privilege mean', 'app permissions safety',
      'why does an app need permissions', 'limit data sharing online',
    ],
    answer: 'Data minimization means collecting or sharing only the information needed for a purpose. Least privilege means an account or app should have only the access it needs, for only as long as needed.\n\nReview app permissions, remove access for apps you no longer use, and choose “only while using” or “ask every time” for location, camera, or microphone when available. For shared files and accounts, grant the narrowest role that still lets someone do their task.',
  },
  {
    phrases: [
      'how to make a backup strategy', '3 2 1 backup rule',
      '3 2 1 backup', 'best way to back up important files',
      'test if backup works', 'restore a backup',
    ],
    answer: 'A common backup approach is the 3-2-1 rule: keep three copies of important data, on two kinds of storage, with one copy kept separately or offline. For example, a device copy, a protected cloud backup, and a disconnected external drive.\n\nAutomate backups when practical, protect cloud access with a unique password and multi-factor authentication, and periodically restore a test file. An untested backup may not work when you need it.',
  },
  {
    phrases: [
      'email spoofing', 'sender address spoofed', 'fake sender email',
      'email from my own address scam', 'business email compromise',
      'invoice email scam', 'fake payment change request',
    ],
    answer: 'Email spoofing makes a message appear to come from a different sender, and a compromised real account can also send convincing requests. Treat unexpected invoices, bank-detail changes, gift-card requests, or urgent payment instructions as unverified.\n\nConfirm payment changes with a known contact using a phone number or channel already on file—not the reply details in the email. Report suspicious messages to your email provider or school IT team. Do not open unexpected attachments or share sign-in codes.',
  },
  {
    phrases: [
      'what is a data breach', 'what does data breach mean',
      'what is identity theft', 'identity theft meaning',
      'protect against identity theft', 'someone used my id',
    ],
    answer: 'A data breach is an incident where information is accessed or disclosed without authorization. Identity theft is when someone uses personal information to impersonate you or misuse an account. A breach does not always mean your identity has been stolen, but it is a reason to act carefully.\n\nUse the affected service’s official site to learn what was exposed, change reused passwords, turn on multi-factor authentication, and watch for suspicious account or financial activity. Contact your bank or the relevant official authority if financial or identity documents are involved.',
  },
  {
    phrases: [
      'what is dns', 'what does dns do', 'domain name system',
      'what is an ip address', 'public ip address', 'private ip address',
      'what is a router', 'how does the internet find a website',
      'network basics', 'what is a computer network',
    ],
    answer: 'DNS (the Domain Name System) helps translate a website name into the network address computers use to connect. An IP address identifies a device or network connection, and a router forwards traffic between your local devices and the internet.\n\nThese terms alone do not identify who owns a website or prove that a link is safe. Use the organization’s verified address for sign-ins, secure your router with a unique admin password and current updates, and avoid posting your home network details publicly.',
  },
  {
    phrases: [
      'what is the dark web', 'dark web', 'deep web',
      'is the dark web illegal', 'dark web safety',
    ],
    answer: 'The deep web is content not indexed by ordinary search engines, such as private account pages. The dark web is a smaller part reached through specialized privacy networks; it has both legitimate privacy uses and illegal activity. Simply hearing about it does not mean someone has done something wrong.\n\nAvoid sites or downloads promising stolen accounts, leaked data, or illegal goods. They can expose you to scams and malware. If your concern is that personal information appeared online, secure affected accounts and report it through the service’s official channel.',
  },
  {
    phrases: [
      'what should i do after a cyber attack', 'cyber incident response',
      'what do i do after being hacked', 'what to do after a cyber incident',
      'someone attacked my account', 'my computer is under attack',
    ],
    priority: 2,
    answer: 'Start with safety and containment: stop replying to suspicious messages, and if a device may be infected, disconnect it from Wi-Fi or wired networks. From a different trusted device, secure your email and affected accounts, change exposed passwords, and sign out other sessions.\n\nContact your school or workplace IT team for managed devices, your bank for payment exposure, and the affected service through its official support channel. Save relevant messages and screenshots. Avoid wiping a device or paying a demand before getting trusted help.',
  },
  {
    phrases: [
      'what is secure coding', 'secure software development',
      'security for developers', 'secure my api', 'protect api keys',
      'keep secrets out of code', 'prevent secrets from leaking',
    ],
    answer: 'Secure development starts with keeping frameworks and dependencies updated, validating input on the server, using established authentication and security libraries, and limiting each service to the access it needs. Never put passwords, API keys, or private tokens in browser code, screenshots, or public repositories; use a server-side secret manager.\n\nUse HTTPS, protect admin accounts with multi-factor authentication, back up data, and review logs for unusual activity. Test only systems you own or have explicit authorization to assess.',
  },
  {
    phrases: [
      'authentication vs authorization', 'difference between authentication and authorization',
      'what is authentication', 'what is authorization',
      'identity and access management', 'what does access control mean',
    ],
    answer: 'Authentication checks who you are, such as when you sign in with a password and a second factor. Authorization decides what an authenticated account is allowed to see or change. A logged-in user should not automatically have access to every file or setting.\n\nFor your own accounts, use multi-factor authentication and review connected apps and sessions. When sharing files or managing a system, grant only the access needed and remove it when it is no longer required.',
  },
  {
    phrases: [
      'what is hacking', 'what is a hacker', 'hacking meaning',
      'hacking vs ethical hacking', 'what is authorized security testing',
    ],
    answer: 'Hacking is a broad term for finding or changing how a computer system works. It can be authorized security research or unauthorized access. “Ethical hacking” means testing with the system owner’s clear permission, written scope, and agreed rules—not trying someone else’s account or public website.\n\nIf you want to learn, use beginner courses and isolated practice labs designed for security training. Never scan, access, or test a system you do not own or have explicit permission to assess.',
  },
  {
    phrases: [
      'zero trust', 'what is zero trust', 'zero trust security',
      'zero trust architecture',
    ],
    answer: 'Zero trust is a security approach that does not automatically trust a user or device just because it is on a familiar network. Access is checked based on identity, device condition, and the specific resource being requested, and permissions are kept limited.\n\nFor an individual, the practical habits are to use multi-factor authentication, keep devices updated, lock screens, review account access, and remove permissions that are no longer needed.',
  },
  {
    phrases: [
      'cloud storage security', 'secure cloud account', 'is cloud storage safe',
      'cloud data security', 'secure my cloud files', 'cloud account hacked',
    ],
    answer: 'Cloud storage can be useful, but its safety depends on the account, sharing settings, and provider. Protect the account with a unique password and multi-factor authentication. Review signed-in devices and connected apps, and share files with specific people rather than public links when possible.\n\nKeep a separate backup of important files, check whether deleted files remain in a recovery bin, and review the provider’s privacy and encryption settings. If you shared a file too widely, turn off the link and check its access history.',
  },
  {
    phrases: [
      'what is spear phishing', 'what is smishing', 'what is whaling',
      'spear phishing', 'smishing vs phishing', 'phishing types',
      'targeted phishing', 'phishing by text message',
    ],
    answer: 'Phishing is a deceptive message meant to get someone to click a link, open a file, share information, or send money. Smishing is phishing by SMS or messaging app; spear phishing is tailored to a particular person or group; whaling targets senior decision-makers. A message can look personal and still be fraudulent.\n\nVerify surprising requests through a separate channel, inspect the actual destination before opening a link, and never share passwords or one-time codes. Report suspicious messages in the app or to your organization’s IT team.',
  },
  {
    phrases: [
      'what is hashing', 'what is a hash', 'hashing vs encryption',
      'hash vs encryption', 'password hashing', 'what is a password hash',
    ],
    answer: 'Hashing turns data into a fixed-length fingerprint that is designed to be one-way; unlike encryption, it is not meant to be reversed with a key. Services can use carefully designed password-hashing methods to check a password without storing it as readable text.\n\nA hash is not automatically safe to publish, especially if it is derived from weak passwords or sensitive data. Use a reputable password manager and never share password files or account databases.',
  },
  {
    phrases: [
      'what is tls', 'what is ssl', 'ssl vs tls', 'tls certificate',
      'website certificate warning', 'browser certificate warning',
      'what does a website certificate do',
    ],
    answer: 'TLS is the modern protocol that encrypts many connections between a browser and a website. People still sometimes call it SSL, an older protocol. A website certificate helps the browser check that the connection is for the domain shown; it does not prove the site is trustworthy or honest.\n\nIf your browser shows a certificate warning, don’t bypass it to sign in or pay. Check the web address, try the official app, and contact the service through a known channel.',
  },
  {
    phrases: [
      'what is dns hijacking', 'dns spoofing', 'pharming',
      'what is pharming', 'redirected to a fake website',
      'my router sends me to a strange website',
    ],
    answer: 'DNS hijacking or pharming can redirect a person from a familiar website name to an unexpected destination. A fake page may still look convincing, so check the full address and do not enter passwords after a browser warning or unexpected redirect.\n\nUse the official app or a known address, keep your router and devices updated, change the router’s default admin password, and contact your internet provider or trusted IT support if redirects continue.',
  },
  {
    phrases: [
      'database security', 'secure a database', 'protect database records',
      'database access control', 'secure customer data database',
    ],
    answer: 'For a database you own or administer, keep the database software patched, restrict network access, use unique service credentials, and grant each account only the permissions it needs. Keep credentials out of client-side code and public repositories. Encrypt connections and sensitive backups, monitor access, and test that backups can be restored.\n\nDo not expose a database directly to the public internet unless the service is specifically designed and secured for that use. Ask a qualified security professional to review systems holding sensitive or regulated data.',
  },
  {
    phrases: [
      'what is cybersecurity', 'what is cyber security', 'cybersecurity awareness',
      'cyber security awareness', 'cyber safety', 'stay safe online',
      'protect myself online', 'general cyber security tips', 'cybersecurity tips',
      'online safety tips', 'cybersecurity basics', 'cyber security basics',
      'what is information security', 'computer security basics', 'internet safety',
      'digital safety', 'general online security',
    ],
    answer: 'Cybersecurity is the practice of protecting accounts, devices, and information from misuse. A few habits prevent many common problems:\n\n1. Use unique passwords and multi-factor authentication, especially for email.\n2. Pause before opening unexpected links, files, QR codes, or requests for money or codes.\n3. Keep your devices and apps updated; back up important files.\n4. Limit what you share and review privacy and app-permission settings.\n5. If something goes wrong, use official recovery and reporting channels quickly.',
  },
];

function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/\bwi[\s-]?fi\b/g, 'wifi')
    .replace(/\be[\s-]?mail\b/g, 'email')
    .replace(/\b2[\s-]?factor\b/g, 'two factor')
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
    .replace(/\bfiles\b/g, 'file')
    .replace(/\bcookies\b/g, 'cookie')
    .replace(/\bwebsites\b/g, 'website')
    .replace(/\bemails\b/g, 'email')
    .replace(/\bphones\b/g, 'phone')
    .replace(/\bapps\b/g, 'app')
    .replace(/\bpermissions\b/g, 'permission')
    .replace(/\battacks\b/g, 'attack')
    .replace(/\bvulnerabilities\b/g, 'vulnerability');
}

function isRequestToHarmOthers(question: string): boolean {
  return [
    /\b(?:hack|break into|get into|take over|spy on)\s+(?:(?:someones?|somebodys?|another person|their)\b|my friends?\b|my classmates?\b)/,
    /\b(?:steal|phish)\s+(?:someones?|somebodys?|another persons?|their)\s*(?:password|account|code|data|money|credential)\b/,
    /\b(?:make|create|build|deploy|write)\s+(?:a\s+)?(?:phishing kit|keylogger|ransomware|malware|virus|worm|trojan|credential stealer)\b/,
    /\b(?:bypass|evade)\s+(?:2fa|mfa|multi factor|two factor|authentication|security|antivirus)\b/,
    /\b(?:launch|perform|run|carry out|start)\s+(?:a\s+)?(?:ddos|denial of service)\s+attack\b/,
    /\b(?:how to|how do i|ways to|steps to)\s+(?:ddos|denial of service)\s+(?:someone|someones?|somebodys?|a website|a server|their site)\b/,
    /\b(?:ddos|denial of service)\s+(?:someones?|somebodys?|their|a website|a server)\b/,
    /\bcrack\s+(?:someones?|somebodys?|their|my friends?)\s+(?:password|wifi|account)\b/,
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

  return 'I can help with cybersecurity concepts and everyday digital safety: accounts, passwords, phishing, scams, networks, privacy, device protection, secure websites, cloud files, backups, and incident response. Try naming the app, account, message, or device and what you are worried about. For an urgent issue, contact the service or your school’s official IT support directly.';
}
