export interface ContentBlock {
  type: "p" | "h3" | "ul" | "ol";
  text?: string;
  items?: string[];
}

export interface LegalDocumentData {
  title: string;
  lastUpdated: string;
  sections: {
    id: string;
    title: string;
    blocks: ContentBlock[];
  }[];
}

export const cookiePolicyData: Record<"tr" | "en" | "ar", LegalDocumentData> = {
  tr: {
    title: "Çerez Politikası",
    lastUpdated: "Son Güncelleme Tarihi: 01.06.2026",
    sections: [
      {
        id: "amac",
        title: "1. AMAÇ",
        blocks: [
          {
            type: "p",
            text: "İşbu Çerez Politikası (“Politika”); GATEXTRA Teknoloji Turizm Anonim Şirketi tarafından işletilen VisitExtra mobil uygulaması, internet sitesi ve bağlı dijital platformlarda kullanılan çerezler (“cookies”), SDK’lar, piksel teknolojileri ve benzeri teknik araçlar hakkında kullanıcıların bilgilendirilmesi amacıyla hazırlanmıştır."
          },
          {
            type: "p",
            text: "VisitExtra; platform güvenliğinin sağlanması, kullanıcı deneyiminin geliştirilmesi ve hizmetlerin teknik olarak sürdürülebilmesi amacıyla sınırlı ölçüde çerez ve benzeri teknolojiler kullanabilir."
          }
        ]
      },
      {
        id: "cerez-nedir",
        title: "2. ÇEREZ (“COOKIE”) NEDİR?",
        blocks: [
          {
            type: "p",
            text: "Çerezler; ziyaret edilen internet siteleri veya mobil uygulamalar tarafından cihazınıza kaydedilen küçük veri dosyalarıdır."
          },
          {
            type: "p",
            text: "Bu teknolojiler sayesinde:"
          },
          {
            type: "ul",
            items: [
              "kullanıcı tercihleri hatırlanabilir,",
              "platform performansı geliştirilebilir,",
              "güvenlik süreçleri desteklenebilir,",
              "kullanıcı deneyimi iyileştirilebilir."
            ]
          },
          {
            type: "p",
            text: "Mobil uygulamalarda yalnızca klasik internet çerezleri değil, SDK (Software Development Kit), piksel ve benzeri teknolojiler de kullanılabilir. İşbu politika kapsamında tüm bu teknolojiler genel olarak “çerez” ifadesi ile anılabilir."
          }
        ]
      },
      {
        id: "cerez-turleri",
        title: "3. KULLANILAN ÇEREZ VE TEKNOLOJİ TÜRLERİ",
        blocks: [
          {
            type: "p",
            text: "VisitExtra kapsamında aşağıdaki teknolojiler kullanılabilir:"
          },
          {
            type: "h3",
            text: "3.1 Zorunlu / Teknik Çerezler"
          },
          {
            type: "p",
            text: "Platformun düzgün çalışabilmesi için gerekli temel teknolojilerdir. Bu teknolojiler; oturum yönetimi, güvenlik doğrulamaları, hesap erişimi, sistem sürekliliği amacıyla kullanılabilir. Bu teknolojiler olmadan platformun bazı bölümleri düzgün çalışmayabilir."
          },
          {
            type: "h3",
            text: "3.2 Performans ve Analitik Teknolojileri"
          },
          {
            type: "p",
            text: "Platform performansını geliştirmek amacıyla anonim veya sınırlı ölçüde analiz verileri kullanılabilir. Bu veriler; hata kayıtlarının incelenmesi, uygulama performansının ölçülmesi, kullanıcı deneyiminin geliştirilmesi, sistem iyileştirmeleri amacıyla kullanılabilir."
          },
          {
            type: "h3",
            text: "3.3 Güvenlik ve Kötüye Kullanım Önleme Sistemleri"
          },
          {
            type: "p",
            text: "VisitExtra; platform güvenliğinin sağlanması, kötüye kullanımın önlenmesi ve kullanıcı güvenliğinin korunması amacıyla sınırlı teknik güvenlik sistemleri kullanabilir. Bu sistemler aşağıdaki durumların tespitine yardımcı olabilir:"
          },
          {
            type: "ul",
            items: [
              "sahte hesap girişimleri,",
              "spam faaliyetleri,",
              "platform manipülasyonu,",
              "otomatik bot kullanımı,",
              "dolandırıcılık şüphesi,",
              "sözleşme ihlalleri,",
              "platform dışına yönlendirme girişimleri."
            ]
          },
          {
            type: "h3",
            text: "3.4 Bildirim ve İletişim Teknolojileri"
          },
          {
            type: "p",
            text: "VisitExtra; hesap bildirimleri, güvenlik uyarıları, sistem bilgilendirmeleri ve kullanıcı destek süreçlerinin yürütülmesi amacıyla teknik bildirim altyapıları kullanabilir."
          }
        ]
      },
      {
        id: "mobil-izinler",
        title: "4. MOBİL UYGULAMA İZİNLERİ",
        blocks: [
          {
            type: "p",
            text: "VisitExtra mobil uygulaması kapsamında aşağıdaki cihaz izinleri kullanıcı onayına bağlı olarak talep edilebilir:"
          },
          {
            type: "ul",
            items: [
              "bildirim izinleri,",
              "konum erişimi,",
              "kamera erişimi,",
              "galeri/dosya erişimi."
            ]
          },
          {
            type: "p",
            text: "Bu izinler yalnızca:"
          },
          {
            type: "ul",
            items: [
              "hizmetlerin sunulabilmesi,",
              "kullanıcı deneyiminin iyileştirilmesi,",
              "doğrulama süreçlerinin yürütülmesi,",
              "teknik gerekliliklerin karşılanması amacıyla kullanılmaktadır."
            ]
          },
          {
            type: "p",
            text: "Kullanıcı cihaz ayarlarından izinleri yönetebilir veya kaldırabilir."
          }
        ]
      },
      {
        id: "konum-teknolojileri",
        title: "5. KONUM TEKNOLOJİLERİ",
        blocks: [
          {
            type: "p",
            text: "Konum verileri yalnızca kullanıcı onayı ve cihaz izinleri kapsamında işlenebilir."
          },
          {
            type: "p",
            text: "Konum verileri:"
          },
          {
            type: "ul",
            items: [
              "yakın hizmet sağlayıcıların gösterilmesi,",
              "şehir bazlı listeleme,",
              "platform güvenliği,",
              "kullanıcı deneyiminin geliştirilmesi amaçlarıyla kullanılabilir."
            ]
          },
          {
            type: "p",
            text: "Kullanıcı cihaz ayarlarından konum paylaşımını kapatabilir."
          }
        ]
      },
      {
        id: "ucuncu-taraf-servisler",
        title: "6. ÜÇÜNCÜ TARAF TEKNİK SERVİSLER",
        blocks: [
          {
            type: "p",
            text: "Platformun teknik olarak sürdürülebilmesi amacıyla bazı üçüncü taraf servis sağlayıcılarından yararlanılabilir. Bu servisler: bulut altyapı servisleri, hata ve performans analiz araçları, güvenlik servisleri, bildirim servisleri, analitik sistemler olabilir."
          },
          {
            type: "p",
            text: "Bu servis sağlayıcılar yalnızca:"
          },
          {
            type: "ul",
            items: [
              "uygulama performansının ölçülmesi,",
              "teknik sorunların tespiti,",
              "platform güvenliğinin artırılması,",
              "hizmet sürekliliğinin sağlanması amacıyla kullanılmaktadır."
            ]
          },
          {
            type: "p",
            text: "VisitExtra kullanıcı verilerini ticari amaçlarla üçüncü taraflara satmaz veya kiralamaz."
          }
        ]
      },
      {
        id: "yurtdisi-servisler",
        title: "7. YURTDIŞINDA BULUNAN SERVİSLER",
        blocks: [
          {
            type: "p",
            text: "Kullanılan bazı teknik servislerin yurtdışında bulunması halinde belirli teknik veriler yurtdışında bulunan sunucularda işlenebilir."
          },
          {
            type: "p",
            text: "Bu süreçler; ilgili mevzuata ve gerekli olduğu durumlarda açık rıza süreçlerine uygun şekilde yürütülmektedir. Veri aktarımı yalnızca platform hizmetlerinin sürdürülebilmesi ve teknik gerekliliklerin yerine getirilebilmesi amacıyla yapılabilir."
          }
        ]
      },
      {
        id: "cerez-yonetimi",
        title: "8. ÇEREZ VE İZİN YÖNETİMİ",
        blocks: [
          {
            type: "p",
            text: "Kullanıcılar; tarayıcı ayarları, cihaz izinleri veya uygulama ayarları üzerinden çerez tercihlerini ve belirli izinleri yönetebilir. Ancak bazı teknik çerezlerin devre dışı bırakılması halinde platformun belirli özellikleri düzgün çalışmayabilir."
          },
          {
            type: "p",
            text: "Mobil uygulama kapsamında kullanıcılar; konum erişimi, bildirim izinleri, kamera erişimi, dosya ve galeri erişimi izinlerini cihaz ayarlarından düzenleyebilir."
          }
        ]
      },
      {
        id: "politika-degisiklik",
        title: "9. ÇEREZ POLİTİKASINDA DEĞİŞİKLİK",
        blocks: [
          {
            type: "p",
            text: "VisitExtra; mevzuat değişiklikleri, teknik gereklilikler, güvenlik süreçleri ve operasyonel ihtiyaçlar doğrultusunda işbu Çerez Politikası’nda değişiklik yapma hakkını saklı tutar."
          },
          {
            type: "p",
            text: "Güncel politika; www.visitextra.com ve mobil uygulama üzerinden yayımlanır. Platformun kullanılmaya devam edilmesi güncel politikaların kabul edildiği anlamına gelir."
          }
        ]
      },
      {
        id: "iletisim-bilgileri",
        title: "10. ŞİRKET VE İLETİŞİM BİLGİLERİ",
        blocks: [
          {
            type: "ul",
            items: [
              "Şirket Ünvanı: GATEXTRA TEKNOLOJİ TURİZM ANONİM ŞİRKETİ",
              "Marka: VisitExtra",
              "Alan Adı: www.visitextra.com",
              "Vergi No: 3892009833",
              "MERSİS No: 0389200983300001",
              "Adres: Sütlüce Mahallesi İmrahor Caddesi No:2 /2 İç Kapı No:26 Beyoğlu / İstanbul – 34440",
              "KEP / Resmî İletişim: info@visitextra.com",
              "KVKK Başvuru E-Postası: bilgi@visitextra.com",
              "Müşteri Hizmetleri: bilgi@visitextra.com",
              "Telefon: 0212 255 87 47"
            ]
          }
        ]
      }
    ]
  },
  en: {
    title: "Cookie Policy",
    lastUpdated: "Last Updated: 01.06.2026",
    sections: [
      {
        id: "amac",
        title: "1. PURPOSE",
        blocks: [
          {
            type: "p",
            text: "This Cookie Policy (“Policy”) has been prepared to inform users about the cookies, SDKs, pixel technologies, and similar technical tools used on the VisitExtra mobile application, website, and related digital platforms operated by GATEXTRA Teknoloji Turizm Anonim Şirketi."
          },
          {
            type: "p",
            text: "VisitExtra may use cookies and similar technologies to a limited extent to ensure platform security, enhance user experience, and technically sustain the services."
          }
        ]
      },
      {
        id: "cerez-nedir",
        title: "2. WHAT IS A COOKIE?",
        blocks: [
          {
            type: "p",
            text: "Cookies are small data files stored on your device by visited websites or mobile applications."
          },
          {
            type: "p",
            text: "Thanks to these technologies:"
          },
          {
            type: "ul",
            items: [
              "User preferences can be remembered,",
              "Platform performance can be enhanced,",
              "Security processes can be supported,",
              "User experience can be improved."
            ]
          },
          {
            type: "p",
            text: "Not only classic web cookies but also SDK (Software Development Kit), pixel, and similar technologies can be used in mobile applications. Within the scope of this policy, all these technologies can be referred to generally as 'cookies'."
          }
        ]
      },
      {
        id: "cerez-turleri",
        title: "3. TYPES OF COOKIES AND TECHNOLOGIES USED",
        blocks: [
          {
            type: "p",
            text: "The following technologies may be used within VisitExtra:"
          },
          {
            type: "h3",
            text: "3.1 Mandatory / Technical Cookies"
          },
          {
            type: "p",
            text: "These are essential technologies required for the platform to function properly. These technologies can be used for session management, security verification, account access, and system continuity. Without these technologies, some parts of the platform may not function properly."
          },
          {
            type: "h3",
            text: "3.2 Performance and Analytical Technologies"
          },
          {
            type: "p",
            text: "Anonymized or limited analysis data can be used to improve platform performance. This data can be used for investigating error records, measuring application performance, improving user experience, and carrying out system upgrades."
          },
          {
            type: "h3",
            text: "3.3 Security and Abuse Prevention Systems"
          },
          {
            type: "p",
            text: "VisitExtra may use limited technical security systems to ensure platform security, prevent abuse, and protect user safety. These systems can help detect the following cases:"
          },
          {
            type: "ul",
            items: [
              "Fake account attempts,",
              "Spam activities,",
              "Platform manipulation,",
              "Automatic bot usage,",
              "Fraud suspicion,",
              "Contract violations,",
              "Off-platform redirection attempts."
            ]
          },
          {
            type: "h3",
            text: "3.4 Notification and Communication Technologies"
          },
          {
            type: "p",
            text: "VisitExtra may use technical notification infrastructures to deliver account notifications, security alerts, system updates, and conduct user support processes."
          }
        ]
      },
      {
        id: "mobil-izinler",
        title: "4. MOBILE APPLICATION PERMISSIONS",
        blocks: [
          {
            type: "p",
            text: "The following device permissions may be requested within the VisitExtra mobile application based on user approval:"
          },
          {
            type: "ul",
            items: [
              "Notification permissions,",
              "Location access,",
              "Camera access,",
              "Gallery/file access."
            ]
          },
          {
            type: "p",
            text: "These permissions are used solely for:"
          },
          {
            type: "ul",
            items: [
              "Providing the services,",
              "Enhancing user experience,",
              "Conducting verification processes,",
              "Meeting technical requirements."
            ]
          },
          {
            type: "p",
            text: "The user can manage or revoke permissions from device settings."
          }
        ]
      },
      {
        id: "konum-teknolojileri",
        title: "5. LOCATION TECHNOLOGIES",
        blocks: [
          {
            type: "p",
            text: "Location data can only be processed with user consent and within the scope of device permissions."
          },
          {
            type: "p",
            text: "Location data may be used to:"
          },
          {
            type: "ul",
            items: [
              "Show nearby service providers,",
              "Perform city-based listings,",
              "Ensure platform security,",
              "Improve user experience."
            ]
          },
          {
            type: "p",
            text: "The user can disable location sharing in device settings."
          }
        ]
      },
      {
        id: "ucuncu-taraf-servisler",
        title: "6. THIRD-PARTY TECHNICAL SERVICES",
        blocks: [
          {
            type: "p",
            text: "Certain third-party service providers may be utilized to technically sustain the platform. These services may include cloud infrastructure services, error and performance analysis tools, security services, notification services, and analytical systems."
          },
          {
            type: "p",
            text: "These service providers are used solely for:"
          },
          {
            type: "ul",
            items: [
              "Measuring application performance,",
              "Identifying technical issues,",
              "Enhancing platform security,",
              "Ensuring service continuity."
            ]
          },
          {
            type: "p",
            text: "VisitExtra does not sell or rent user data to third parties for commercial purposes."
          }
        ]
      },
      {
        id: "yurtdisi-servisler",
        title: "7. SERVICES LOCATED ABROAD",
        blocks: [
          {
            type: "p",
            text: "If some of the technical services used are located abroad, certain technical data may be processed on servers located abroad."
          },
          {
            type: "p",
            text: "These processes are carried out in accordance with relevant legislation and explicit consent processes when necessary. Data transfer may only be performed to sustain platform services and fulfill technical requirements."
          }
        ]
      },
      {
        id: "cerez-yonetimi",
        title: "8. COOKIE AND PERMISSION MANAGEMENT",
        blocks: [
          {
            type: "p",
            text: "Users can manage cookie preferences and specific permissions through browser settings, device permissions, or application settings. However, if some technical cookies are disabled, certain features of the platform may not function properly."
          },
          {
            type: "p",
            text: "Within the mobile application, users can adjust location access, notification permissions, camera access, and file/gallery access permissions in device settings."
          }
        ]
      },
      {
        id: "politika-degisiklik",
        title: "9. AMENDMENTS TO COOKIE POLICY",
        blocks: [
          {
            type: "p",
            text: "VisitExtra reserves the right to make changes to this Cookie Policy in accordance with legislative changes, technical requirements, security processes, and operational needs."
          },
          {
            type: "p",
            text: "The current policy is published on www.visitextra.com and through the mobile application. Continued use of the platform implies acceptance of the current policies."
          }
        ]
      },
      {
        id: "iletisim-bilgileri",
        title: "10. COMPANY AND CONTACT INFORMATION",
        blocks: [
          {
            type: "ul",
            items: [
              "Company Title: GATEXTRA TEKNOLOJİ TURİZM ANONİM ŞİRKETİ",
              "Brand: VisitExtra",
              "Domain Name: www.visitextra.com",
              "Tax No: 3892009833",
              "MERSIS No: 0389200983300001",
              "Address: Sütlüce Mahallesi İmrahor Caddesi No:2 /2 İç Kapı No:26 Beyoğlu / İstanbul – 34440",
              "Registered Electronic Mail (KEP): info@visitextra.com",
              "KVKK Application Email: bilgi@visitextra.com",
              "Customer Services: bilgi@visitextra.com",
              "Phone: 0212 255 87 47"
            ]
          }
        ]
      }
    ]
  },
  ar: {
    title: "سياسة ملفات تعريف الارتباط",
    lastUpdated: "تاريخ آخر تحديث: 01.06.2026",
    sections: [
      {
        id: "amac",
        title: "1. الهدف",
        blocks: [
          {
            type: "p",
            text: "تم إعداد سياسة ملفات تعريف الارتباط هذه (\"السياسة\") لإعلام المستخدمين بملفات تعريف الارتباط (\"cookies\") وحزم أدوات تطوير البرمجيات (SDKs) وتقنيات البكسل والأدوات التقنية المماثلة المستخدمة في تطبيق الهاتف المحمول وموقع الويب والمنصات الرقمية المرتبطة بـ VisitExtra والتي تديرها شركة GATEXTRA Teknoloji Turizm Anonim Şirketi."
          },
          {
            type: "p",
            text: "يجوز لـ VisitExtra استخدام ملفات تعريف الارتباط والتقنيات المماثلة بشكل محدود لضمان أمن المنصة وتحسين تجربة المستخدم واستدامة الخدمات تقنيًا."
          }
        ]
      },
      {
        id: "cerez-nedir",
        title: "2. ما هي ملفات تعريف الارتباط (\"COOKIE\")؟",
        blocks: [
          {
            type: "p",
            text: "ملفات تعريف الارتباط هي ملفات بيانات صغيرة يتم حفظها على جهازك بواسطة مواقع الويب أو تطبيقات الهاتف المحمول التي تتم زيارتها."
          },
          {
            type: "p",
            text: "بفضل هذه التقنيات:"
          },
          {
            type: "ul",
            items: [
              "يمكن تذكر تفضيلات المستخدم،",
              "يمكن تحسين أداء المنصة،",
              "يمكن دعم العمليات الأمنية،",
              "يمكن تحسين تجربة المستخدم."
            ]
          },
          {
            type: "p",
            text: "لا يمكن استخدام ملفات تعريف الارتباط الكلاسيكية للإنترنت فحسب في تطبيقات الهاتف المحمول، بل يمكن أيضًا استخدام حزم SDK وتقنيات البكسل والتقنيات المماثلة. وفي إطار هذه السياسة، يمكن الإشارة إلى كل هذه التقنيات عمومًا باسم \"ملفات تعريف الارتباط\"."
          }
        ]
      },
      {
        id: "cerez-turleri",
        title: "3. أنواع ملفات تعريف الارتباط والتقنيات المستخدمة",
        blocks: [
          {
            type: "p",
            text: "يمكن استخدام التقنيات التالية في إطار VisitExtra:"
          },
          {
            type: "h3",
            text: "3.1 ملفات تعريف الارتباط الإلزامية / التقنية"
          },
          {
            type: "p",
            text: "هي التقنيات الأساسية اللازمة لعمل المنصة بشكل صحيح. يمكن استخدام هذه التقنيات لإدارة الجلسات والتحقق الأمني والوصول إلى الحساب واستمرارية النظام. قد لا تعمل بعض أجزاء المنصة بشكل صحيح بدون هذه التقنيات."
          },
          {
            type: "h3",
            text: "3.2 تقنيات الأداء والتحليل"
          },
          {
            type: "p",
            text: "يمكن استخدام بيانات تحليلية مجهولة الهوية أو محدودة لتحسين أداء المنصة. يمكن استخدام هذه البيانات لفحص سجلات الأخطاء وقياس أداء التطبيق وتحسين تجربة المستخدم وإجراء تحسينات على النظام."
          },
          {
            type: "h3",
            text: "3.3 نظم الأمن ومنع إساءة الاستخدام"
          },
          {
            type: "p",
            text: "يجوز لـ VisitExtra استخدام أنظمة أمان تقنية محدودة لضمان أمن المنصة ومنع إساءة الاستخدام وحماية سلامة المستخدم. يمكن أن تساعد هذه الأنظمة في الكشف عن الحالات التالية:"
          },
          {
            type: "ul",
            items: [
              "محاولات الحسابات المزيفة،",
              "الأنشطة غير المرغوب فيها (spam)،",
              "التلاعب بالمنصة،",
              "استخدام برامج البوت التلقائية،",
              "الاشتباه في الاحتيال،",
              "انتهاكات العقود،",
              "محاولات التوجيه خارج المنصة."
            ]
          },
          {
            type: "h3",
            text: "3.4 تقنيات الإخطار والاتصال"
          },
          {
            type: "p",
            text: "يجوز لـ VisitExtra استخدام البنى التحتية للإخطار التقني لتلقي إشعارات الحساب وتنبيهات الأمان ومعلومات النظام وإجراء عمليات دعم المستخدم."
          }
        ]
      },
      {
        id: "mobil-izinler",
        title: "4. أذونات تطبيق الهاتف المحمول",
        blocks: [
          {
            type: "p",
            text: "يمكن طلب أذونات الجهاز التالية في إطار تطبيق VisitExtra للهاتف المحمول بناءً على موافقة المستخدم:"
          },
          {
            type: "ul",
            items: [
              "أذونات الإشعارات،",
              "الوصول إلى الموقع،",
              "الوصول إلى الكاميرا،",
              "الوصول إلى المعرض/الملفات."
            ]
          },
          {
            type: "p",
            text: "تُستخدم هذه الأذونات فقط من أجل:"
          },
          {
            type: "ul",
            items: [
              "تقديم الخدمات،",
              "تحسين تجربة المستخدم،",
              "إجراء عمليات التحقق،",
              "تلبية المتطلبات التقنية."
            ]
          },
          {
            type: "p",
            text: "يمكن للمستخدم إدارة الأذونات أو إزالتها من إعدادات الجهاز."
          }
        ]
      },
      {
        id: "konum-teknolojileri",
        title: "5. تقنيات الموقع",
        blocks: [
          {
            type: "p",
            text: "لا يمكن معالجة بيانات الموقع إلا بموجب موافقة المستخدم وأذونات الجهاز."
          },
          {
            type: "p",
            text: "يمكن استخدام بيانات الموقع من أجل:"
          },
          {
            type: "ul",
            items: [
              "عرض مقدمي الخدمات القريبين،",
              "إجراء قوائم على أساس المدينة،",
              "أمن المنصة،",
              "تحسين تجربة المستخدم."
            ]
          },
          {
            type: "p",
            text: "يمكن للمستخدم إغلاق مشاركة الموقع من إعدادات الجهاز."
          }
        ]
      },
      {
        id: "ucuncu-taraf-servisler",
        title: "6. خدمات تقنية من طرف ثالث",
        blocks: [
          {
            type: "p",
            text: "من أجل الحفاظ على استمرارية المنصة تقنيًا، يمكن الاستفادة من بعض مقدمي الخدمات من الطرف الثالث. يمكن أن تكون هذه الخدمات: خدمات البنية التحتية السحابية، أدوات تحليل الأخطاء والأداء، خدمات الأمان، خدمات الإشعارات، الأنظمة التحليلية."
          },
          {
            type: "p",
            text: "يُستخدم مقدمو الخدمات هؤلاء فقط من أجل:"
          },
          {
            type: "ul",
            items: [
              "قياس أداء التطبيق،",
              "الكشف عن المشاكل التقنية،",
              "زيادة أمن المنصة،",
              "ضمان استمرارية الخدمة."
            ]
          },
          {
            type: "p",
            text: "لا تبيع VisitExtra بيانات المستخدم أو تؤجرها لأطراف ثالثة لأغراض تجارية."
          }
        ]
      },
      {
        id: "yurtdisi-servisler",
        title: "7. الخدمات الموجودة خارج البلاد",
        blocks: [
          {
            type: "p",
            text: "في حالة وجود بعض الخدمات التقنية المستخدمة خارج البلاد، يمكن معالجة بعض البيانات التقنية على خوادم تقع خارج البلاد."
          },
          {
            type: "p",
            text: "تتم هذه العمليات وفقًا للتشريعات ذات الصلة وعمليات الموافقة الصريحة عند الضرورة. لا يمكن نقل البيانات إلا من أجل الحفاظ على خدمات المنصة وتلبية المتطلبات التقنية."
          }
        ]
      },
      {
        id: "cerez-yonetimi",
        title: "8. إدارة ملفات تعريف الارتباط والأذونات",
        blocks: [
          {
            type: "p",
            text: "يمكن للمستخدمين إدارة تفضيلات ملفات تعريف الارتباط وأذونات معينة من خلال إعدادات المتصفح أو أذونات الجهاز أو إعدادات التطبيق. ومع ذلك، في حالة تعطيل بعض ملفات تعريف الارتباط التقنية، قد لا تعمل بعض ميزات المنصة بشكل صحيح."
          },
          {
            type: "p",
            text: "في إطار تطبيق الهاتف المحمول، يمكن للمستخدمين تنظيم أذونات الوصول إلى الموقع، وأذونات الإشعارات، والوصول إلى الكاميرا، والوصول إلى الملفات والمعرض من إعدادات الجهاز."
          }
        ]
      },
      {
        id: "politika-degisiklik",
        title: "9. تغيير سياسة ملفات تعريف الارتباط",
        blocks: [
          {
            type: "p",
            text: "تحتفظ VisitExtra بالحق في إجراء تغييرات على سياسة ملفات تعريف الارتباط هذه تماشيًا مع التغييرات التشريعية والمتطلبات التقنية والعمليات الأمنية والاحتياجات التشغيلية."
          },
          {
            type: "p",
            text: "تُنشر السياسة الحالية على www.visitextra.com وعبر تطبيق الهاتف المحمول. يعتبر الاستمرار في استخدام المنصة قبولاً بالسياسات الحالية."
          }
        ]
      },
      {
        id: "iletisim-bilgileri",
        title: "10. معلومات الشركة والاتصال",
        blocks: [
          {
            type: "ul",
            items: [
              "اسم الشركة: GATEXTRA TEKNOLOJİ TURİZM ANONİM ŞİRKETİ",
              "العلامة التجارية: VisitExtra",
              "اسم النطاق: www.visitextra.com",
              "الرقم الضريبي: 3892009833",
              "رقم MERSİS: 0389200983300001",
              "العنوان: Sütlüce Mahallesi İmrahor Caddesi No:2 /2 İç Kapı No:26 Beyoğlu / İstanbul – 34440",
              "البريد الإلكتروني الرسمي (KEP): info@visitextra.com",
              "البريد الإلكتروني لطلبات KVKK: bilgi@visitextra.com",
              "خدمة العملاء: bilgi@visitextra.com",
              "الهاتف: 0212 255 87 47"
            ]
          }
        ]
      }
    ]
  }
};
