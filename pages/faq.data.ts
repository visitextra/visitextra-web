export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  passenger: FaqItem[];
  driver: FaqItem[];
}

export const faqLocalizedData: Record<"tr" | "en" | "ar", FaqGroup> = {
  tr: {
    passenger: [
      {
        question: "1. VisitExtra nedir?",
        answer: "VisitExtra; Yolcular ile turizm taşımacılığı alanında faaliyet gösteren bireysel şoförleri ve kurumsal firmaları dijital ortamda buluşturan teknoloji platformudur. Platform üzerinden araçları görüntüleyebilir, şoför profillerini inceleyebilir, konuşulan dilleri görebilir, kullanıcı yorumlarını inceleyebilir ve uygulama içi mesajlaşma sistemi üzerinden iletişim kurabilirsiniz. VisitExtra taşımacılık hizmetini bizzat sunmaz."
      },
      {
        question: "2. VisitExtra bir transfer firması mı?",
        answer: "Hayır. VisitExtra; transfer firması değildir, taşımacılık hizmeti sunmaz, rezervasyon tarafı değildir, ödeme kuruluşu değildir. VisitExtra yalnızca Yolcu ile Hizmet Sağlayıcı arasında dijital görünürlük ve iletişim altyapısı sağlayan teknoloji platformudur."
      },
      {
        question: "3. Şoförler güvenilir mi?",
        answer: "VisitExtra platformunda yer alan hizmet sağlayıcılar platform güvenliği ve yasal uyumluluk kapsamında belirli doğrulama süreçlerinden geçirilebilir. Platformda yer alabilmek için hizmet sağlayıcıların turizm taşımacılığı faaliyetini yürütmeye ilişkin gerekli mesleki ve yasal yükümlülüklere sahip olması beklenmektedir. Ancak VisitExtra; hizmet sağlayıcının davranışları, hizmet kalitesi veya operasyonel süreçlerine ilişkin mutlak garanti vermez."
      },
      {
        question: "4. Ödemeyi kime yapacağım?",
        answer: "VisitExtra ödeme tahsil etmez ve ödeme sürecinin tarafı değildir. Ödeme, doğrudan Yolcu ile Hizmet Sağlayıcı arasında gerçekleşir. Fiyat, ödeme yöntemi ve ödeme zamanı taraflar arasında belirlenmektedir."
      },
      {
        question: "5. Neden iletişim yalnızca uygulama üzerinden ilerliyor?",
        answer: "VisitExtra’da kullanıcı güvenliği ve şeffaf iletişimin korunması amacıyla tüm iletişim uygulama içi mesajlaşma sistemi üzerinden yürütülmektedir. Telefon numarası paylaşımı, WhatsApp yönlendirmesi veya platform dışına iletişim taşınması platform kurallarına aykırı olabilir. Bu sistem; kayıtlı iletişim sağlamak, dolandırıcılığı azaltmak, güvenliği artırmak ve olası uyuşmazlık süreçlerinin incelenebilmesini sağlamak amacıyla uygulanmaktadır."
      },
      {
        question: "6. Anlaştığım araç yerine farklı araç gelebilir mi?",
        answer: "Hayır. VisitExtra’da Yolcunun uygulama üzerinden görüntülediği araç ve şoför bilgileri esas alınır. Yolcunun açık onayı olmaksızın farklı araç veya sürücü yönlendirilmesi platform kurallarına aykırı olabilir. Araç arızası veya zorunlu operasyonel durumlarda Yolcu uygulama üzerinden yeni hizmet sağlayıcı talebi oluşturabilir."
      },
      {
        question: "7. Hizmet sağlayıcıyı puanlayabilir veya yorum yapabilir miyim?",
        answer: "Evet. VisitExtra kullanıcı deneyimini geliştirmek amacıyla hizmet sağlayıcılar hakkında değerlendirme ve yorum yapılmasına izin verebilir. Yorumların; dürüst, gerçek deneyime dayalı, hakaret veya tehdit içermeyen şekilde yapılması beklenmektedir."
      },
      {
        question: "8. VisitExtra ücretli mi?",
        answer: "VisitExtra mevcut iş modeli kapsamında kullanıcılar için ücretsiz sunulmaktadır. Platform; komisyon almaz, rezervasyon bedeli talep etmez, ödeme tahsil etmez. İlerleyen dönemlerde farklı ticari modeller uygulanabilir."
      },
      {
        question: "9. Hesabımı silebilir miyim?",
        answer: "Evet. Kullanıcılar uygulama ayarları üzerinden hesap silme veya hesap kapatma talebinde bulunabilir. Yasal yükümlülükler ve mevzuattan kaynaklanan veri saklama zorunlulukları saklı kalmak kaydıyla ilgili veriler silinebilir, anonim hale getirilebilir veya mevzuata uygun şekilde saklanabilir."
      },
      {
        question: "10. Sorun yaşarsam nasıl destek alabilirim?",
        answer: "Sorularınız veya destek talepleriniz için bizimle iletişime geçebilirsiniz. E-Posta: bilgi@visitextra.com, Telefon: 0212 255 87 47, Web Sitesi: www.visitextra.com"
      }
    ],
    driver: [
      {
        question: "1. VisitExtra’ya kimler kayıt olabilir?",
        answer: "VisitExtra’ya yalnızca turizm taşımacılığı faaliyetini mevzuata uygun şekilde yürüten hizmet sağlayıcılar kayıt olabilir. Bireysel hizmet sağlayıcıların ve kurumsal firmaların; turizm taşımacılığı faaliyetini yürütebilmek için gerekli yetki, izin, mesleki yeterlilik ve mevzuat kapsamında zorunlu yükümlülüklere sahip olması beklenmektedir. Tüm başvurular platform doğrulama ve onay süreçlerinden geçmektedir."
      },
      {
        question: "2. Profilimin aktif hale gelmesi için hangi belgeler gereklidir?",
        answer: "Platform güvenliği, kullanıcı güveni ve yasal uyumluluk amacıyla doğrulama süreçlerinin tamamlanması gerekmektedir. VisitExtra’ya kayıt olacak bireysel şoförlerin ve kurumsal hizmet sağlayıcıların turizm taşımacılığı faaliyetini yürütebilmek için gerekli yetki, izin, mesleki yeterlilik ve mevzuat kapsamında zorunlu belgelere sahip olması gerekmektedir. Belge gereklilikleri bireysel hizmet sağlayıcılar, kurumsal firmalar, kayıt edilen araçlar ve sürücüler için farklılık gösterebilir. Doğrulama süreçlerini tamamlamayan hesaplar aktif hale getirilmez."
      },
      {
        question: "3. Neden araç fotoğrafı yüklemem gerekiyor?",
        answer: "VisitExtra’da Yolcular hizmet almadan önce gerçek aracı görüntüleyebilir. Bu nedenle sisteme yüklenen araç görsellerinin; güncel, gerçek araca ait, yanıltıcı olmayan görseller olması beklenmektedir. Platformda görüntülenen araç ile fiilen hizmet veren aracın aynı olması esastır. Yanıltıcı araç bilgisi veya farklı araç kullanımı platform kurallarına aykırı olabilir."
      },
      {
        question: "4. Neden yalnızca uygulama içinden iletişim kurabiliyorum?",
        answer: "VisitExtra’da kullanıcı güvenliği ve şeffaf iletişim amacıyla tüm iletişim uygulama içi mesajlaşma sistemi üzerinden yürütülmektedir. Telefon numarası paylaşımı, WhatsApp yönlendirmesi veya platform dışı iletişim yöntemleri platform kurallarına aykırı olabilir. Bu sistem; kullanıcı güvenliğini artırmak, kayıtlı iletişim sağlamak, dolandırıcılığı azaltmak ve olası uyuşmazlıkların incelenebilmesini sağlamak amacıyla uygulanmaktadır."
      },
      {
        question: "5. Yolcu ile doğrudan anlaşabilir miyim?",
        answer: "Yolcu ile hizmet detayları, tarih, saat ve fiyat görüşmeleri uygulama içi mesajlaşma sistemi üzerinden gerçekleştirilebilir. Ancak kullanıcı güvenliği ve platform şeffaflığı amacıyla iletişimin uygulama dışına taşınmaması beklenmektedir. Telefon numarası paylaşımı veya harici platformlara yönlendirme platform kurallarına aykırı olabilir."
      },
      {
        question: "6. VisitExtra komisyon alıyor mu?",
        answer: "Hayır. VisitExtra mevcut iş modeli kapsamında; komisyon almaz, ödeme tahsil etmez, rezervasyon ücreti talep etmez. Platform şu an itibarıyla hem Yolcular hem de Hizmet Sağlayıcılar için ücretsiz sunulmaktadır. İlerleyen dönemlerde farklı ticari modeller devreye alınabilir."
      },
      {
        question: "7. Farklı araç veya şoför gönderebilir miyim?",
        answer: "Hayır. Yolcunun platform üzerinden görüntülediği ve anlaşma sağladığı araç ve şoför bilgileri esas alınır. Yolcunun açık onayı olmaksızın farklı araç gönderilmesi veya farklı sürücü yönlendirilmesi platform kurallarına aykırı olabilir. Araç arızası veya zorunlu operasyonel durumlarda Yolcu uygulama üzerinden yeni hizmet sağlayıcı talebi oluşturmalıdır."
      },
      {
        question: "8. Profilim neden askıya alınabilir?",
        answer: "Aşağıdaki durumlarda hesap askıya alınabilir veya kapatılabilir: sahte bilgi paylaşımı, yanıltıcı araç bilgisi, sahte belge kullanımı, platform dışına yönlendirme girişimi, telefon veya WhatsApp paylaşımı, farklı araç/sürücü yönlendirmesi, tehdit, taciz veya uygunsuz davranış, güvenlik riski oluşturabilecek faaliyetler."
      },
      {
        question: "9. Hesabımı silebilir miyim?",
        answer: "Evet. Kullanıcılar uygulama ayarları üzerinden hesap silme veya hesap kapatma talebinde bulunabilir. Yasal yükümlülükler ve mevzuattan kaynaklanan veri saklama zorunlulukları saklı kalmak kaydıyla ilgili veriler silinebilir, anonim hale getirilebilir veya mevzuata uygun şekilde saklanabilir."
      },
      {
        question: "10. Sorularım için nasıl destek alabilirim?",
        answer: "Sorularınız veya destek talepleriniz için bizimle iletişime geçebilirsiniz. E-Posta: bilgi@visitextra.com, Telefon: 0212 255 87 47, Web Sitesi: www.visitextra.com"
      }
    ]
  },
  en: {
    passenger: [
      {
        question: "1. What is VisitExtra?",
        answer: "VisitExtra is a technology platform that digitally connects passengers with individual drivers and corporate companies operating in tourism transportation. Through the platform, you can view vehicles, inspect driver profiles, see languages spoken, review user ratings, and communicate via the in-app messaging system. VisitExtra does not provide transportation services directly."
      },
      {
        question: "2. Is VisitExtra a transfer company?",
        answer: "No. VisitExtra is not a transfer company, does not provide transportation services, is not a party to reservations, and is not a payment institution. VisitExtra is solely a technology platform providing digital visibility and communication infrastructure between the Passenger and the Service Provider."
      },
      {
        question: "3. Are the drivers reliable?",
        answer: "Service providers on VisitExtra undergo certain verification checks for platform safety and legal compliance. To operate on the platform, service providers are expected to possess the necessary professional and legal credentials for tourism transportation. However, VisitExtra does not guarantee the behavior, service quality, or operational processes of the service providers."
      },
      {
        question: "4. Who do I make the payment to?",
        answer: "VisitExtra does not collect payments and is not a party to the payment process. Payments take place directly between the Passenger and the Service Provider. Price, payment method, and payment time are decided between the parties."
      },
      {
        question: "5. Why does communication happen only through the app?",
        answer: "To protect user safety and transparent communication, all communication in VisitExtra is conducted via the in-app messaging system. Sharing phone numbers, redirecting to WhatsApp, or moving communication off the platform may violate platform rules. This system is implemented to ensure logged communication, reduce fraud, increase safety, and allow review of potential dispute processes."
      },
      {
        question: "6. Can a different vehicle arrive instead of the one I agreed on?",
        answer: "No. The vehicle and driver details viewed by the Passenger on the app are binding. Directing a different vehicle or driver without the Passenger's explicit consent may violate platform rules. In case of vehicle breakdown or urgent operational issues, the Passenger can create a new service provider request on the app."
      },
      {
        question: "7. Can I rate or review the service provider?",
        answer: "Yes. VisitExtra may allow users to rate and review service providers to improve the user experience. Reviews are expected to be honest, based on real experience, and free from insults or threats."
      },
      {
        question: "8. Is VisitExtra paid?",
        answer: "VisitExtra is offered free of charge to users under its current business model. The platform does not charge commissions, request booking fees, or collect payments. Different commercial models may be applied in the future."
      },
      {
        question: "9. Can I delete my account?",
        answer: "Yes. Users can request account deletion or closure via the app settings. Subject to legal obligations and data retention requirements arising from regulations, relevant data may be deleted, anonymized, or stored in compliance with the law."
      },
      {
        question: "10. How can I get support if I experience issues?",
        answer: "You can contact us for questions or support requests. Email: bilgi@visitextra.com, Phone: 0212 255 87 47, Website: www.visitextra.com"
      }
    ],
    driver: [
      {
        question: "1. Who can register with VisitExtra?",
        answer: "Only service providers who carry out tourism transportation activities in compliance with regulations can register with VisitExtra. Individual drivers and corporate firms are expected to hold the necessary authorizations, licenses, professional competence, and mandatory obligations. All applications go through platform verification and approval processes."
      },
      {
        question: "2. What documents are required for my profile to become active?",
        answer: "Verification processes must be completed for platform security, user trust, and legal compliance. Individual drivers and corporate service providers registering with VisitExtra must hold the necessary authorizations, permits, professional competence, and mandatory legal documents. Document requirements may differ for individual providers, corporate firms, registered vehicles, and drivers. Accounts that do not complete the verification processes will not be activated."
      },
      {
        question: "3. Why do I need to upload vehicle photos?",
        answer: "On VisitExtra, Passengers can view the actual vehicle before receiving service. Therefore, vehicle images uploaded to the system must be current, belong to the real vehicle, and not be misleading. It is essential that the vehicle displayed on the platform matches the vehicle serving. Using misleading vehicle information or different vehicles may violate platform rules."
      },
      {
        question: "4. Why can I only communicate through the app?",
        answer: "For user safety and transparent communication, all communication in VisitExtra is conducted via the in-app messaging system. Sharing phone numbers, redirecting to WhatsApp, or off-platform communication methods may violate platform rules. This system is used to increase user safety, ensure logged communication, reduce fraud, and allow review of potential disputes."
      },
      {
        question: "5. Can I agree directly with the passenger?",
        answer: "Negotiations regarding service details, date, time, and price can be conducted via the in-app messaging system. However, for user safety and platform transparency, communication is expected not to be carried outside the app. Sharing phone numbers or redirecting to external platforms may violate platform rules."
      },
      {
        question: "6. Does VisitExtra charge commission?",
        answer: "No. Under its current business model, VisitExtra does not take commissions, collect payments, or request booking fees. The platform is currently offered free of charge for both Passengers and Service Providers. Different commercial models may be introduced in the future."
      },
      {
        question: "7. Can I send a different vehicle or driver?",
        answer: "No. The vehicle and driver details viewed and agreed upon by the passenger on the platform are binding. Sending a different vehicle or driver without the Passenger's explicit consent may violate platform rules. In case of vehicle breakdown or urgent operational issues, the Passenger must create a new service provider request on the app."
      },
      {
        question: "8. Why could my profile be suspended?",
        answer: "Accounts can be suspended or closed in the following cases: sharing false info, misleading vehicle details, using fake documents, off-platform redirection attempts, sharing phone or WhatsApp details, directing different vehicles/drivers, threats, harassment, inappropriate behavior, or activities that pose safety risks."
      },
      {
        question: "9. Can I delete my account?",
        answer: "Yes. Users can request account deletion or closure via the app settings. Subject to legal obligations and data retention requirements, relevant data may be deleted, anonymized, or stored in compliance with the law."
      },
      {
        question: "10. How can I get support for my questions?",
        answer: "You can contact us for your questions or support requests. Email: bilgi@visitextra.com, Phone: 0212 255 87 47, Website: www.visitextra.com"
      }
    ]
  },
  ar: {
    passenger: [
      {
        question: "1. ما هو VisitExtra؟",
        answer: "VisitExtra هي منصة تقنية تجمع الركاب مع السائقين الأفراد والشركات في مجال النقل السياحي رقميًا. من خلال المنصة، يمكنك عرض السيارات، فحص ملفات تعريف السائقين، رؤية اللغات المتحدث بها، مراجعة تقييمات المستخدمين، والتواصل عبر نظام الرسائل الداخلي للتطبيق. لا تقدم VisitExtra خدمات النقل بنفسها."
      },
      {
        question: "2. هل VisitExtra شركة نقل؟",
        answer: "لا. ليست شركة نقل ولا تقدم خدمات النقل ولا تجمع حجوزات أو مدفوعات. هي فقط منصة رقمية للتواصل والظهور وتوفير البنية التحتية للتواصل بين الراكب ومقدم الخدمة."
      },
      {
        question: "3. هل السائقون موثوقون؟",
        answer: "يخضع مقدمو الخدمة في المنصة لعمليات تحقق معينة لسلامة المنصة والامتثال القانوني. وللتواجد في المنصة، يُتوقع من مقدمي الخدمة حيازة التراخيص والوثائق المهنية والقانونية المطلوبة للنقل السياحي. ومع ذلك، فإن VisitExtra لا تقدم ضمانًا مطلقًا لسلوك مقدمي الخدمة أو جودة الخدمة أو العمليات التشغيلية."
      },
      {
        question: "4. لمن أدفع؟",
        answer: "VisitExtra لا تجمع المدفوعات وليست طرفًا في عملية الدفع. تتم المدفوعات مباشرة بين الراكب ومقدم الخدمة. يتم تحديد السعر وطريقة الدفع ووقت الدفع بين الطرفين."
      },
      {
        question: "5. لماذا يتم التواصل عبر التطبيق فقط؟",
        answer: "لحماية أمن المستخدم وشفافية المعاملات، يتم إجراء جميع الاتصالات في VisitExtra عبر نظام الرسائل الداخلي للتطبيق. مشاركة أرقام الهواتف أو التوجيه إلى واتساب أو نقل الاتصالات خارج المنصة قد يخالف قواعد المنصة. يُطبق هذا النظام لضمان تسجيل الاتصالات وتقليل الاحتيال وزيادة الأمان والسماح بمراجعة النزاعات المحتملة."
      },
      {
        question: "6. هل يمكن أن تأتي سيارة مختلفة عن التي اتفقت عليها؟",
        answer: "لا. تفاصيل السيارة والسائق التي يعرضها الراكب في التطبيق هي الأساس. وتوجيه سيارة مختلفة أو سائق مختلف دون موافقة الراكب الصريحة قد يخالف قواعد المنصة. في حالة تعطل السيارة أو المشاكل التشغيلية العاجلة، يمكن للراكب إنشاء طلب مقدم خدمة جديد في التطبيق."
      },
      {
        question: "7. هل يمكنني تقييم مقدم الخدمة أو التعليق عليه؟",
        answer: "نعم. قد تسمح VisitExtra للمستخدمين بتقييم ومراجعة مقدمي الخدمة لتحسين تجربة المستخدم. يُتوقع أن تكون المراجعات صادقة ومبنية على تجربة حقيقية وخالية من الإهانات أو التهديدات."
      },
      {
        question: "8. هل منصة VisitExtra مدفوعة؟",
        answer: "يتم تقديم VisitExtra مجانًا للمستخدمين بموجب نموذج أعمالها الحالي. لا تفرض المنصة عمولات أو تطلب رسوم حجز أو تجمع مدفوعات. قد يتم تطبيق نماذج تجارية مختلفة في المستقبل."
      },
      {
        question: "9. هل يمكنني حذف حسابي؟",
        answer: "نعم. يمكن للمستخدمين طلب حذف الحساب أو إغلاقه عبر إعدادات التطبيق. مع مراعاة الالتزامات القانونية ومتطلبات الاحتفاظ بالبيانات بموجب اللوائح، قد يتم حذف البيانات ذات الصلة أو جعلها مجهولة الهوية أو تخزينها وفقًا للقانون."
      },
      {
        question: "10. كيف يمكنني الحصول على الدعم إذا واجهت مشاكل؟",
        answer: "يمكنك الاتصال بنا للأسئلة أو طلبات الدعم. البريد الإلكتروني: bilgi@visitextra.com، الهاتف: 0212 255 87 47، الموقع الإلكتروني: www.visitextra.com"
      }
    ],
    driver: [
      {
        question: "1. من يمكنه التسجيل في VisitExtra؟",
        answer: "يمكن فقط لمقدمي الخدمة الذين يمارسون أنشطة النقل السياحي بما يتوافق مع اللوائح التسجيل في VisitExtra. يُتوقع من السائقين الأفراد والشركات حيازة التراخيص والتصاريح والكفاءة المهنية والالتزامات الإلزامية. تخضع جميع الطلبات لعمليات التحقق والموافقة من المنصة."
      },
      {
        question: "2. ما هي المستندات المطلوبة لتفعيل حسابي؟",
        answer: "يجب إكمال عمليات التحقق لأمن المنصة وثقة المستخدم والامتثال القانوني. يجب على السائقين الأفراد ومقدمي الخدمات من الشركات المسجلين في VisitExtra حيازة التراخيص والتصاريح والكفاءة المهنية والمستندات القانونية الإلزامية. قد تختلف متطلبات المستندات لمقدمي الخدمات الأفراد والشركات والسيارات المسجلة والسائقين. لن يتم تفعيل الحسابات التي لا تكمل عمليات التحقق."
      },
      {
        question: "3. لماذا أحتاج إلى تحميل صور السيارة؟",
        answer: "في VisitExtra، يمكن للركاب عرض السيارة الفعلية قبل تلقي الخدمة. لذلك، يجب أن تكون صور السيارة المرفوعة إلى النظام حديثة، وتخص السيارة الحقيقية، وألا تكون مضللة. من الضروري أن تطابق السيارة المعروضة في المنصة السيارة التي تقدم الخدمة فعليًا. قد يخالف استخدام معلومات سيارة مضللة أو سيارات مختلفة قواعد المنصة."
      },
      {
        question: "4. لماذا يمكنني التواصل عبر التطبيق فقط؟",
        answer: "لأمن المستخدم والتواصل الشفاف، يتم إجراء جميع الاتصالات في VisitExtra عبر نظام الرسائل الداخلي للتطبيق. مشاركة أرقام الهواتف أو التوجيه إلى واتساب أو طرق الاتصال خارج المنصة قد يخالف قواعد المنصة. يُستخدم هذا النظام لزيادة أمن المستخدم، وضمان تسجيل الاتصالات، وتقليل الاحتيال، والسماح بمراجعة النزاعات المحتملة."
      },
      {
        question: "5. هل يمكنني الاتفاق مباشرة مع الراكب؟",
        answer: "يمكن إجراء المفاوضات المتعلقة بتفاصيل الخدمة والتاريخ والوقت والسعر عبر نظام الرسائل الداخلي للتطبيق. ومع ذلك، لأمن المستخدم وشفافية المنصة، يُتوقع عدم نقل الاتصالات خارج التطبيق. مشاركة أرقام الهواتف أو التوجيه إلى منصات خارجية قد يخالف قواعد المنصة."
      },
      {
        question: "6. هل تأخذ VisitExtra عمولة؟",
        answer: "لا. بموجب نموذج أعمالها الحالي، لا تأخذ VisitExtra عمولات أو تجمع مدفوعات أو تطلب رسوم حجز. يتم تقديم المنصة حاليًا مجانًا لكل من الركاب ومقدمي الخدمة. قد يتم تقديم نماذج تجارية مختلفة في المستقبل."
      },
      {
        question: "7. هل يمكنني إرسال سيارة أو سائق آخر؟",
        answer: "لا. تفاصيل السيارة والسائق التي عرضها الراكب ووافق عليها في المنصة ملزمة. إرسال سيارة مختلفة أو سائق مختلف دون موافقة الراكب الصريحة قد يخالف قواعد المنصة. في حالة تعطل السيارة أو المشاكل التشغيلية العاجلة، يجب على الراكب إنشاء طلب مقدم خدمة جديد في التطبيق."
      },
      {
        question: "8. لماذا قد يتم تعليق حسابي؟",
        answer: "يمكن تعليق الحسابات أو إغلاقها في الحالات التالية: مشاركة معلومات كاذبة، تفاصيل سيارة مضللة، استخدام وثائق مزورة، محاولات التوجيه خارج المنصة، مشاركة تفاصيل الهاتف أو واتساب، توجيه سيارات/سائقين مختلفين، التهديدات، المضايقات، السلوك غير اللائق، أو الأنشطة التي تشكل مخاطر أمنية."
      },
      {
        question: "9. هل يمكنني حذف حسابي؟",
        answer: "نعم. يمكن للمستخدمين طلب حذف الحساب أو إغلاقه عبر إعدادات التطبيق. مع مراعاة الالتزامات القانونية ومتطلبات الاحتفاظ بالبيانات بموجب اللوائح، قد يتم حذف البيانات ذات الصلة أو جعلها مجهولة الهوية أو تخزينها وفقًا للقانون."
      },
      {
        question: "10. كيف يمكنني الحصول على الدعم لأسئلتي؟",
        answer: "يمكنك الاتصال بنا لأسئلتك أو طلبات الدعم. البريد الإلكتروني: bilgi@visitextra.com، الهاتف: 0212 255 87 47، الموقع الإلكتروني: www.visitextra.com"
      }
    ]
  }
};
