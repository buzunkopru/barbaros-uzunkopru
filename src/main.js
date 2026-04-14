import './style.css'

/* 
  --------------------------------------------------
  Dr. Barbaros Uzunköprü :: Academic & Literary Portfolio
  --------------------------------------------------
*/

const app = document.querySelector('#app')

// Data Structures
const linkedinUrl = "https://www.linkedin.com/in/barbaros-uzunk%C3%B6pr%C3%BC-85b81a91/"

const myArticles = [
  { 
    doi: "10.58306/wollt.1485495", 
    title: "Çeviriyi Yakmak: Raymond van den Broeck'un Eleştiri Modeliyle Fahrenheit 451'in Türkçe Çevirisinin Eleştirisi",
    titleEn: "Burning the Translation: A Critique of the Turkish Translation of Fahrenheit 451 Through Raymond van den Broeck’s Criticism Model",
    journal: "WOLLT Journal"
  },
  { 
    doi: "10.26650/iujts.2022.1032466", 
    title: "Tanzimat ve Erken Cumhuriyet Dönemlerinde Girişilen Modernleşme Çabalarını Çeviri Kurumları Üzerinden Değerlendirmek: Encümen-i Daniş ve Tercüme Bürosu Örnekleri",
    titleEn: "Evaluating Modernization Efforts During the Tanzimat Era and Early Republican Period Through Translation Institutions: Examples of Encümen-i Daniş and Translation Bureau",
    journal: "IU Journal of Translation Studies"
  }
]

const myDissertations = [
  { 
    title: "Tanzimat ve Erken Cumhuriyet Dönemlerinde çeviri faaliyetleri ve modernleşme: Encümen-i Daniş ve Tercüme Bürosu örneklerinde modernleşme ve çeviri ilişkisi", 
    titleEn: "Translation activities and modernization in Tanzimat era and Early Republican Period: The relationship between modernization and translation in the examples of Encümen-i Daniş and Translation Bureau",
    filename: "doktora.pdf", 
    type: "Master's Thesis",
    typeTr: "Yüksek Lisans Tezi",
    university: "Istanbul University",
    universityTr: "İstanbul Üniversitesi"
  },
  { 
    title: "Mikrotarih yaklaşımı temelinde bir aktivist çevirmen incelemesi: Alâeddin Şenel", 
    titleEn: "A microhistorical analysis of an activist translator: Alâeddin Şenel",
    filename: "Master.pdf", 
    type: "Doctoral Dissertation",
    typeTr: "Doktora Tezi",
    university: "Istanbul University",
    universityTr: "İstanbul Üniversitesi"
  }
]

const myCourses = [
  { year: "2025-2026", title: "Introduction to Translation Technologies", tr: "Çeviri Teknolojilerine Giriş" },
  { year: "2025-2026", title: "History of Translation", tr: "Çeviri Tarihi" },
  { year: "2025-2026", title: "Consecutive Interpreting", tr: "Ardıl Çeviri" },
  { year: "2024-2025", title: "Introduction to Interpreting", tr: "Sözlü Çeviriye Giriş" },
  { year: "2024-2025", title: "Audiovisual Translation", tr: "Görsel İşitsel Çeviri" },
  { year: "2024-2025", title: "Introduction to Translation II", tr: "Çeviriye Giriş II" },
  { year: "2024-2025", title: "Translation Seminar", tr: "Çeviri Semineri" },
  { year: "2024-2025", title: "Workflows in Translation Services", tr: "Çeviri Hizmetlerinde İş Süreçleri" }
]

const myPresentation = {
  title: "Tarihçi mi, Çeviribilimci mi? Çeviri Tarihçisinin Konumu Hakkında İhtilaflar ve Ufuklar",
  congress: "2nd International Congress on Academic Studies in Translation and Interpreting Studies",
  date: "30.09.2024",
  filename: "conference_paper.pdf"
}

// Official Bibliography (Local Assets)
const myBooks = [
  {
    title: "İmparatorluklar Çağı’nın Büyük Komutanları (1583-1865)",
    originalTitle: "Great Commanders of the Early Modern World",
    originalAuthor: "Andrew Roberts",
    publisher: "Kronik Kitap",
    category: "History & Strategy",
    categoryTr: "Tarih & Strateji",
    cover: "covers/komutanlar.jpg"
  },
  {
    title: "Napoléon - Hayatı",
    originalTitle: "Napoléon: A Life",
    originalAuthor: "Andrew Roberts",
    publisher: "Kronik Kitap",
    category: "History & Biography",
    categoryTr: "Tarih & Biyografi",
    cover: "covers/Napoleon.jpg"
  },
  {
    title: "Savaşta Liderlik - Tarihi Değiştirenlerden Hayati Dersler",
    originalTitle: "Leadership in War",
    originalAuthor: "Andrew Roberts",
    publisher: "Kronik Kitap",
    category: "Military Strategy",
    categoryTr: "Askeri Strateji",
    cover: "covers/savasta_liderlik.jpg"
  },
  {
    title: "Çifte Tazminat",
    originalTitle: "Double Indemnity",
    originalAuthor: "James M. Cain",
    publisher: "Alakarga Sanat Yayınları",
    category: "Literary Noir",
    categoryTr: "Edebi Kara Roman",
    cover: "covers/cifte_tazminat.jpg"
  },
  {
    title: "Ana",
    originalTitle: "Mother",
    originalAuthor: "Maxim Gorky",
    publisher: "Zeplin Yayınları",
    category: "World Classics",
    categoryTr: "Dünya Klasikleri",
    cover: "covers/ana.jpg"
  },
  {
    title: "Hannibal",
    originalTitle: "Hannibal",
    originalAuthor: "Nick Fields",
    publisher: "Kronik Kitap",
    category: "Military History",
    categoryTr: "Askeri Tarih",
    cover: "covers/Hannibal.jpg"
  },
  {
    title: "Napoleon Bonaparte",
    originalTitle: "Napoleon Bonaparte",
    originalAuthor: "Gregory Fremont-Barnes",
    publisher: "Kronik Kitap",
    category: "Military History",
    categoryTr: "Askeri Tarih",
    cover: "covers/Napoleon - Osprey.jpg"
  },
  {
    title: "Erwin Rommel",
    originalTitle: "Erwin Rommel",
    originalAuthor: "Pierre P. Battistelli",
    publisher: "Kronik Kitap",
    category: "Military History",
    categoryTr: "Askeri Tarih",
    cover: "covers/Rommel.jpg"
  },
  {
    title: "Heinz Guderian",
    originalTitle: "Heinz Guderian",
    originalAuthor: "Pierre P. Battistelli",
    publisher: "Kronik Kitap",
    category: "Military History",
    categoryTr: "Askeri Tarih",
    cover: "covers/Guderian.jpg"
  },
  {
    title: "SS Teşkilatı: Hitler’in Elit Ordusu",
    originalTitle: "Hitler’s Elite",
    originalAuthor: "Chris McNab",
    publisher: "Timaş Yayınları",
    category: "History",
    categoryTr: "Tarih",
    cover: "covers/ss_teskilati.jpg"
  },
  {
    title: "Kan Kırmızı Karlar",
    originalTitle: "Blood Red Snows",
    originalAuthor: "Günter Koschorrek",
    publisher: "Kronik Kitap",
    category: "Military Memoir",
    categoryTr: "Askeri Anı",
    cover: "covers/kizil_karlar.jpg"
  },
  {
    title: "Hitler: Canavarın Ardındaki Adam",
    originalTitle: "Hitler: The Man Behind the Monster",
    originalAuthor: "Michael Kerrigan",
    publisher: "Kronik Kitap",
    category: "History",
    categoryTr: "Tarih",
    cover: "covers/Hitler.jpg"
  }
]

// --- Book Samples ---
const bookSamples = [
  "<p>İmparator Ferdinand, kişisel ihtirasları vazifelerinin önüne geçmeye başlayan Wallenstein’ı görevden aldı ve İsveçli Gustavus Adolphus’un 1630’da 13.000 askeriyle Oder Nehri’nin ağzında karaya çıkmasının ardından hem imparatorluk hem de Katolik Birliği ordularına komuta etmesi için Tilly Kontu’nu atadı. Artık 70 yaşın üzerinde olan General yanlış kararlar vermeye ve hatalar yapmaya giderek daha yatkın hâle geliyor ve dik başlı astlarını kontrol etmekte güçlük çekiyordu. Tilly, İsveç’in Almanya’daki başlıca müttefiki olan Magdeburg’u abluka altına aldı. Gustavus, Tilly Kontu’nu Magdeburg’dan saptırmak için güneye yönelip Frankfurt-an-der-Oder’i ele geçirdi ancak yaşlı kurt yemi yutmadı. Kont 20 Mayıs’ta Magdeburg’a taarruz edip şehri ele geçirdi ve akabinde korkunç bir yağma başladı. Garnizon kuvvetini de içeren 20.000 kişilik nüfusun yalnızca 5.000’i hayatta kalabildi.</p>",
  "<p>Yüzbaşı Blaze, “Büyük muharebenin ardından hem kargalar hem de bildiri yazarları için bolca malzeme var” diye yazdı notlarına. Napoléon düzlük alana daha ilk aşamada girmek, Melas’ın taarruzunu öngörememek ve Desaix’yi bir hayli uzak bir noktaya göndermekle üç büyük hata yapmıştı. Ancak kazanan yine de kendisiydi ve Marengo’yu onun zaferi addetmek siyaseten kaçınılmazdı.</p><p>Berthier tarafından kaleme alınan muharebenin resmî tarihinin Napoléon’un onayından geçmesi için üç kez düzeltilmesi gerekti. Desaix’nin emir subayı Savary ise çok farklı bir görüşteydi: “Şayet General Desaix bir saat geç kalsaydı hepimiz Po Nehri’nin dibini boylamıştık.”</p>",
  "<p>Kitaptaki dokuz liderin her biri çok büyük bir öz güvene sahipti. Zira bu özellik, büyük savaş liderlerinin temel özelliklerindendir. Bu güven, örneğin Winston Churchill’e, doğumundan itibaren özel olduğunu ve liderlik etme hakkına sahip olduğunu vurgulayan aile geçmişinden ve eğitiminden geliyordu. Napoléon da kendine çok güvenirdi. Ergenliğinden yetişkinliğinin ilk yıllarına kadar olağanüstü bir zekâ ve yeteneğe sahip olduğunu gün be gün daha fazla fark etti.</p><p>Bu liderlerin içlerinde besledikleri umutlara ket vuran engeller de yok değildi elbette ancak onlar bu engelleri sivriltip adeta kendilerine silah yaptılar. Başarısızlık onlar için yalnızca istisnaydı. Her başarısızlık gelecekte kullanabilecekleri birer derse dönüştü.</p>",
  "<p>Kelimeler ağzımdan dökülürken kendimi dışarıdan izliyor gibiydim. Kısa bir an göz göze geldik. Şöminenin alevleri gözlerinde yansırken bir leoparla göz göze gelmiş gibi hissediyordum.</p><p>“Devam et. Dinliyorum.”</p><p>“Birincisi, yardım almaktır. İkincisi, cinayet saati, yeri, şekli ve cinayet ile ilgili her şey önceden senin tarafından bilinmeli; ancak bunların hiçbiri kesinlikle öldürülecek kişi tarafından bilinmemelidir. Üçüncüsü, cesarettir. Cinayet anında bazen öyle zamanlar gelir ki başarabilmenin tek yolu o an içindeki cesareti dışarıya çıkarabilmektir. Kusursuz bir cinayet işleyebileceğini mi sanıyorsun? İki dakikada anlarlar.”</p>",
  "<p>Her gün fabrika düdüğünün kulakları tırmalayan tiz feryadı, işçi mahallesinin isli ve ağır havasında yankılanır, buhar gücünün çağrısına biat eden insancıklar küçük gri evlerinden sokaklara dökülüp; uykusuzluktan kaskatı kesilmiş vücutları ve kasvetten çökmüş yüzleri ile karafatmalar gibi güruh halinde fabrikaya doğru hızla yürürlerdi. Yağ bağlamış pencerelerinden sızan puslu ışıkla çamurlu ve daracık yollarını aydınlatan devasa modern mağaralarına gitmek için sabahın o kesif ayazında yollara düşerlerdi.</p><p>Akşam çöküp güneşten geriye kalan son ışık huzmeleri sefil evlerin pencerelerine son kez vururken, fabrika işi bitmiş insan kalıntılarını sönmüş birer kül gibi kusar; yağdan ve isten kararmış yüzleri, makine yağı sinmiş cılız vücutları ve açlıktan kokan ağızlarıyla işçiler tekrar daracık yollardan evlerine dönerdi.</p>",
  "<p>Bu devasa mücadelede Kartaca ordularının başkomutanı, karizmatik, ketum ve kahramanlara özgü niteliklere sahip olan Hannibal’di (MÖ 247-183). Hannibal, Hamilcar Barca’nın en büyük oğluydu ve en azından şahsi kanaatime göre antik dönemin en büyük komutanıydı.</p><p>Taktik seviyede önemli bir farklılık göze çarpar. Büyük İskender muharebe alanlarında cephe hattını yarmayı amaçlarken Hannibal düşman birliklerini kuşatmayı tercih eder. Kartacalı komutan şu kuralı asla aklından çıkarmaz: “Düşmanı kanatlardan kuşatma imkânı varsa asla cephe taarruzu gerçekleştirmemek gerekir.” Hannibal, hile ve aldatmaca üstadıdır ve bu anlamda Odysseus’a benzer.</p>",
  "<p>Büyük İskender hariç tutulursa Napoléon’un gelmiş geçmiş en büyük komutan olduğunu söylemek yanlış olmayacaktır. Çıktığı kısa süreli ve ani seferlerle rakiplerine taktik açıdan üstünlük sağlayan Napoléon’un bir stratejist olarak dengi görülebilecek kişilerin sayısı bir elin parmaklarını geçmez.</p><p>Sıradan bir yüzbaşıyken sekiz haftalık bir sürecin sonunda tuğgeneral rütbesine ulaştı ve 1796’da ordu komutanı oldu. Henüz 35 yaşındayken imparatorluk tacını giydi ve 1805-1812 yılları arasında Avrupa’nın büyük bir kısmını fethetti.</p>",
  "<p>Rommel, Kolovrat Sırtı’nda yaşanan mücadeleden birkaç gün sonra, gelecekte kariyerini şekillendirecek olan savaşın değişen doğasını tecrübe etmeye başladı. 7 Kasım’da askerlerini bir dağ geçidindeki İtalyan mevziine doğru taarruza kaldırmıştı. Bunun üzerine üç piyade ve bir makineli tüfek bölüğünü alıp döne döne çıkan yoldan dağın yukarı noktalarına götürdü.</p><p>Piyadeler nihayet taarruza kalktığında makineli tüfek bölüğü mühimmatını ve etkisini yitirdi. Rommel’in astları onun kendisi ve onlar için biçtiği yüksek standartlara ulaşmakta başarısız olmuşlardı. Rommel’in buradan çıkardığı sonuç son derece basitti: Eğer başarıyı garantilemek istiyorsa her şey bizzat onun kontrolünde olmalıydı.</p>",
  "<p>Motorizasyon ve mekanizasyonun çelik gibi gerçekliğinin meydana getirdiği yeni muharebe şeklinin fitili işte o gün ateşlendi. Bu gerçeklik büyük oranda savaşın değişen tabiatını teorileri ve muharebe alanlarındaki uygulamalarıyla kanıtlayan Heinz Guderian’ın yetenek ve becerileri sayesinde vücut bulmuştu.</p><p>Panzer ilerleyişi, Müttefiklerin elindeki son liman olan Dunkirk’e 15 km. kala 24 Mayıs’ta durakladı. “Dur” emri geldiğinde Guderian’ın kolordusu mevcut tanklarının yaklaşık yarısını kaybetmişti. İki gün sonra ilerleyiş yeniden başladığında Guderian mevcut şansın yitirildiğini kabul etti ve Dunkirk kuşatmasının nihayete erdirilmesini piyadelere bırakmayı önerdi.</p>",
  "<p>1923 yılının Ocak ayındaki ilk ulusal mitingde Hitler huzurunda geçit töreni yapana kadar SA’nın mevcudu, 4 alay halinde 6000 kişiye ulaşmıştı. Röhm’ün bitmek tükenmek bilmeyen hırsı Hitler’i tamamen ona bağlı ve SA’nın dışında küçük ve yeni bir birim kurmaya itmişti. Böylelikle SS doğmuş oldu.</p><p>1923’ün Mart ayında Hitler, Stabswache adında, üyeleri doğrudan onun adına sadakat yemini edecek bir muhafız birliği kurulmasını emretti. İki ay sonra ismi Stosstrupp Adolf Hitler olarak değiştirildi ve bu birliğe kurukafa simgesi verildi. 30 kişilik bu birlik 9 Kasım 1923’te başarısızlıkla sonuçlanan Münih Darbesi’ne katıldı ve olay esnasında Graf, Führer’in hayatını kurtardı.</p>",
  "<p>Fırsat bu fırsattı! Derhal makinelinin başına geçerek dikkatli bir şekilde nişan aldım ve kısa aralıklarla ateş etmeye başladım. İlerlemekte olan Sovyet piyade yığınının üzerine ateş ediyordum. Grommel yanıma geldi ve mühimmat kemerini tutarak makineliyi beslemeye yardım etmeye başladı. Kahverengi silüetlerden bazılarının yere devrildiğini görüyordum.</p><p>Zihnim tamamen boşalmıştı. Namlunun aşırı ısınmasından dolayı silah tutukluk yapmaya başlamış ve ben namluyu saniyeler içinde değiştirirken sıcak metalin elimi közlediğinin bile farkına varmamıştım. Güvenli mevzilerimizden dört makineli tüfekle bize doğru gelen yığının üzerine ateş açıyorduk. Az sonra sağ cenahımızdaki makineli tüfeklerimizden ikisi aniden sessizliğe gömüldü.</p>",
  "<p>Facia nihayete ulaştı; Almanya’nın milli bütünlüğü un ufak oldu. Askerler ve aileleri ihanete uğramıştı. Hitler şöyle yazacaktı: “Tüm fedakârlıklar ve çekilen sıkıntılar boşunaydı; açlık ve susuzlukla geçen, bitip tükenmek bilmeyen aylar boşunaydı. Kalplerimizi mengeneye sıkıştıran ölüm korkusunun gölgesinde geçen saatler boşunaydı. Görevlerimizi yapmış olsak da iki milyon ölüm boşunaydı.”</p><p>Bir kez daha görülüyor ki Hitler tıpkı ülkesinin denizcilerine yaptığı gibi Alman kahramanlarını bir sıraya koyma eğilimindeydi. Savaşın son safhalarında orduya katılanların “çoğunlukla kıymete değer olmadığını” söylemekten de geri durmuyordu.</p>"
]

let currentLang = 'en'

const bio = {
  en: "A graduate of Hacettepe University’s English Translation and Interpreting program, my journey through language has always been a pursuit of the 'threshold'—the delicate space where history, modernization, and thought intersect. After tenures at both Ankara University and İstanbul Beykent University, I dedicated my graduate and doctoral research at Istanbul University to the intricate relationship between translation and the evolution of the Turkish Republic. Today, as an Assistant Professor at İstanbul Beykent University, I continue to explore the nuances of modern military history and the art of rendering the world’s most significant texts into Turkish.",
  tr: "Hacettepe Üniversitesi İngilizce Mütercim Tercümanlık Bölümü’nden mezuniyetimle başlayan dil yolculuğum, her zaman tarihin, modernleşmenin ve düşüncenin kesiştiği o narin 'eşik' üzerinde bir arayış olmuştur. Ankara Üniversitesi ve İstanbul Beykent Üniversitesi'ndeki eğitmenlik görevlerimin ardından, İstanbul Üniversitesi’ndeki lisansüstü ve doktora çalışmalarımı Türkiye’nin modernleşme serüveni ile çeviri faaliyetleri arasındaki derin ilişkiye adadım. Bugün, İstanbul Beykent Üniversitesi’nde Doktor Öğretim Üyesi olarak görev yaparken, bir yandan akademik çalışmalarımı sürdürüyor, bir yandan da dünya tarihine ve edebiyatına yön veren metinleri Türkçeye kazandırmanın inceliklerini keşfetmeye devam ediyorum."
}

let isFirstRender = true

const renderApp = () => {
  const scrollY = window.scrollY
  document.documentElement.lang = currentLang
  app.innerHTML = `
    <nav class="desk-nav">
      <div class="nav-brand">Dr. Barbaros Uzunköprü</div>
      <div class="nav-links" style="font-family: var(--font-sans);">
        <a href="#about" class="nav-link">${currentLang === 'en' ? 'About' : 'Hakkında'}</a>
        <a href="#library" class="nav-link">${currentLang === 'en' ? 'Library' : 'Kütüphane'}</a>
        <a href="#academic" class="nav-link">${currentLang === 'en' ? 'Academia' : 'Akademi'}</a>
        <a href="#contact" class="nav-link">${currentLang === 'en' ? 'Contact' : 'İletişim'}</a>
        <div class="lang-toggle" style="cursor: pointer; font-size: 0.7rem; letter-spacing: 0.1em; color: var(--accent-gold); display: flex; gap: 0.5rem; align-items: center;">
          <span id="btn-en" role="button" tabindex="0" aria-pressed="${currentLang === 'en'}" aria-label="Switch to English" style="${currentLang === 'en' ? 'font-weight: bold; text-decoration: underline;' : ''}">EN</span> /
          <span id="btn-tr" role="button" tabindex="0" aria-pressed="${currentLang === 'tr'}" aria-label="Türkçeye geç" style="${currentLang === 'tr' ? 'font-weight: bold; text-decoration: underline;' : ''}">TR</span>
        </div>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Open navigation menu">☰</button>
    </nav>

    <div class="mobile-menu" id="mobile-menu">
      <a href="#about" class="nav-link" id="mob-about">${currentLang === 'en' ? 'About' : 'Hakkında'}</a>
      <a href="#library" class="nav-link" id="mob-library">${currentLang === 'en' ? 'Library' : 'Kütüphane'}</a>
      <a href="#academic" class="nav-link" id="mob-academic">${currentLang === 'en' ? 'Academia' : 'Akademi'}</a>
      <a href="#contact" class="nav-link" id="mob-contact">${currentLang === 'en' ? 'Contact' : 'İletişim'}</a>
      <div class="mobile-lang-toggle">
        <span id="btn-en-mob" role="button" tabindex="0" aria-pressed="${currentLang === 'en'}" aria-label="Switch to English" style="${currentLang === 'en' ? 'font-weight: bold; text-decoration: underline;' : ''}">EN</span> /
        <span id="btn-tr-mob" role="button" tabindex="0" aria-pressed="${currentLang === 'tr'}" aria-label="Türkçeye geç" style="${currentLang === 'tr' ? 'font-weight: bold; text-decoration: underline;' : ''}">TR</span>
      </div>
    </div>

    <header class="hero-section">
      <div class="hero-background"></div>
      <div class="desk-container" style="position: relative; z-index: 1;">
        
        <div style="max-width: 800px; margin: 0 auto; text-align: center;">
          <div class=”hero-subtitle”>${currentLang === 'en' ? 'Assistant Professor & Literary Translator' : 'Doktor Öğretim Üyesi ve Kitap Çevirmeni'}</div>
          <h1 class=”hero-title” style=”margin-bottom: 1rem;”>${currentLang === 'en' ? '“Translation is that which transforms everything so that nothing changes.”' : '“Çeviri, her şeyi dönüştürerek hiçbir şeyi değiştirmemektir.”'}</h1>
          <p style=”font-family: var(--font-sans); font-size: 0.7rem; letter-spacing: 0.25em; text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 2rem;”>— Günter Grass</p>
          <div class=”ink-divider”></div>
        </div>
      </div>
    </header>

    <section id="about" class="desk-container" style="padding: 7rem 0;">
      <div class="about-grid" data-animate>
        <div>
          <img src="assets/images/profile.png" alt="Dr. Barbaros Uzunköprü" class="portrait-img">
        </div>
        <div>
          <h2 style="font-size: 3rem; font-style: italic; margin-bottom: 2rem;">${currentLang === 'en' ? 'Professional Profile' : 'Özgeçmiş'}</h2>
          <p class="bio-text" style="font-size: 1.25rem; line-height: 1.8; color: var(--text-ink-dark); font-family: var(--font-serif);">
            "${bio[currentLang]}"
          </p>
        </div>
      </div>
    </section>

    <section id="library" class="desk-container" style="padding: 6rem 0; border-top: 1px solid var(--border-sepia);">
      <div data-animate>
        <h2 style="font-size: 3.5rem; text-align: center; font-style: italic; margin-bottom: 0.5rem;">${currentLang === 'en' ? 'The Bookshelf' : 'Kitaplık'}</h2>
        <p style="text-align: center; font-family: var(--font-sans); color: var(--accent-gold); text-transform: uppercase; letter-spacing: 0.2em; font-size: 0.85rem; margin-bottom: 4rem;">${currentLang === 'en' ? 'A bibliography of official translations' : 'Resmi çevirilerin bibliyografyası'}</p>
      </div>
      
      <div class="library-grid">
        ${myBooks.map((book, idx) => `
          <div class="book-card" style="${isFirstRender ? `opacity: 0; animation: slideFadeUp 0.6s ease-out forwards ${0.3 + (idx * 0.1)}s;` : ''}">
            <div class="book-volume">
               <!-- Front Cover -->
               <div class="book-face book-front">
                  <img src="${book.cover}" alt="${book.title}" loading="lazy">
                  <div class="read-sample-overlay" role="button" tabindex="0" aria-label="${currentLang === 'en' ? 'Read sample of' : 'Tadımlık oku:'} ${book.title}" onclick="openSample(${idx}, event)" onkeydown="if(event.key==='Enter'||event.key===' ')openSample(${idx},event)">
                     <div class="read-icon" aria-hidden="true">📖</div>
                     <div class="read-text">${currentLang === 'en' ? 'Read Sample' : 'Tadımlık Oku'}</div>
                  </div>
               </div>
               <!-- Spine -->
               <div class="book-face book-spine">
                  <span class="spine-title">${book.title.length > 25 ? book.title.substring(0, 25) + '...' : book.title}</span>
               </div>
               <!-- Page Edges (Right, Top, Bottom) -->
               <div class="book-face book-pages-right"></div>
               <div class="book-face book-pages-top"></div>
               <div class="book-face book-pages-bottom"></div>
               <!-- Back Cover -->
               <div class="book-face book-back"></div>
            </div>
            <div class="book-info">
              <p style="font-family: var(--font-sans); font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent-gold); margin-bottom: 0.5rem;">${currentLang === 'en' ? book.category : book.categoryTr}</p>
              <h3 style="font-size: 1.2rem; line-height: 1.2; margin-bottom: 0.4rem;">${book.title}</h3>
              <p style="font-size: 0.8rem; color: var(--ink-secondary); font-style: italic; margin-bottom: 0.2rem;">${currentLang === 'en' ? 'By' : 'Yazar:'} ${book.originalAuthor}</p>
              <p style="font-family: var(--font-sans); font-size: 0.68rem; color: var(--ink-secondary); opacity: 0.7; margin-bottom: 0.8rem;">${currentLang === 'en' ? 'Original:' : 'Özgün:'} <em>${book.originalTitle}</em></p>
              <p style="font-family: var(--font-sans); font-size: 0.7rem; color: #999; text-transform: uppercase; letter-spacing: 0.1em;">${book.publisher}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <section id="academic" style="padding: 7rem 0; background: var(--bg-parchment); border-top: 1px solid var(--border-sepia);">
       <div class="desk-container">
          <div style="text-align: center; margin-bottom: 6rem;" data-animate>
             <div class="hero-subtitle">${currentLang === 'en' ? 'Academic Depositary' : 'Akademik Arşiv'}</div>
             <h2 style="font-size: 4rem; font-style: italic;">${currentLang === 'en' ? 'Research & Publications' : 'Araştırma & Yayınlar'}</h2>
          </div>
          
          <div style="display: grid; grid-template-columns: 1fr; gap: 4rem;">
             <div class="academic-grid" data-animate>
                <div>
                   <h3 style="font-size: 1.6rem; margin-bottom: 2rem; border-bottom: 2px solid var(--accent-gold); padding-bottom: 1rem; font-style: italic;">${currentLang === 'en' ? 'Articles & Papers' : 'Makaleler & Çalışmalar'}</h3>
                   ${myArticles.map(art => `
                      <div class="academic-entry" style="margin-bottom: 3.5rem;">
                         <p style="font-family: var(--font-sans); font-size: 0.7rem; color: var(--accent-gold); text-transform: uppercase; margin-bottom: 0.5rem; letter-spacing: 0.1em;">DOI: ${art.doi} | ${art.journal}</p>
                         <p style="font-size: 1.2rem; line-height: 1.4; margin-bottom: 1rem; font-weight: 500;">${currentLang === 'en' ? art.titleEn : art.title}</p>
                         <a href="https://doi.org/${art.doi}" target="_blank" style="color: var(--text-ink-dark); text-decoration: none; font-size: 1.1rem; border-bottom: 1px solid var(--text-ink-dark); padding-bottom: 2px;">${currentLang === 'en' ? 'Access Publication ↗' : 'Yayına Eriş ↗'}</a>
                      </div>
                   `).join('')}

                   <div style="margin-top: 5rem; padding: 2.5rem; border: 1px solid var(--border-sepia); background: white; border-radius: 4px; box-shadow: 2px 2px 0px var(--border-sepia);">
                      <h3 style="font-size: 1.3rem; margin-bottom: 1.5rem; border-bottom: 1px solid var(--accent-gold); padding-bottom: 0.5rem; font-style: italic;">${currentLang === 'en' ? 'Conferences' : 'Konferanslar'}</h3>
                      <p style="font-family: var(--font-sans); font-size: 0.65rem; color: var(--accent-gold); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.13em;">${myPresentation.congress}</p>
                      <p style="font-size: 0.75rem; color: var(--ink-secondary); margin-bottom: 1rem;">${currentLang === 'en' ? 'Date:' : 'Tarih:'} ${myPresentation.date}</p>
                      <p style="font-size: 1.2rem; line-height: 1.5; font-style: italic; margin-bottom: 2rem;">"${myPresentation.title}"</p>
                      <a href="docs/${myPresentation.filename}" target="_blank" class="doc-link" style="margin-bottom: 0;">
                         <span style="flex-grow: 1; font-weight: bold;">${currentLang === 'en' ? 'Download Paper' : 'Makaleyi İndir'}</span>
                         <span style="font-size: 1.2rem;">📥</span>
                      </a>
                   </div>
                </div>
                
                <div>
                   <h3 style="font-size: 1.6rem; margin-bottom: 2rem; border-bottom: 2px solid var(--accent-gold); padding-bottom: 1rem; font-style: italic;">${currentLang === 'en' ? 'Theses & Dissertations' : 'Tezler'}</h3>
                   ${myDissertations.map(doc => `
                      <div style="margin-bottom: 3rem;">
                         <p style="font-family: var(--font-sans); font-size: 0.7rem; color: var(--accent-gold); text-transform: uppercase; margin-bottom: 1rem; letter-spacing: 0.1em;">
                            ${currentLang === 'en' ? doc.type : doc.typeTr} | ${currentLang === 'en' ? doc.university : doc.universityTr}
                         </p>
                         <p style="font-size: 1.3rem; line-height: 1.4; margin-bottom: 1.5rem; font-weight: 500;">
                            ${currentLang === 'en' ? doc.titleEn : doc.title}
                         </p>
                         <a href="docs/${doc.filename}" target="_blank" class="doc-link">
                            <span style="flex-grow: 1;">Download ${currentLang === 'en' ? doc.type : doc.typeTr}</span>
                            <span style="font-size: 1.2rem;">📥</span>
                         </a>
                      </div>
                   `).join('')}
                </div>
             </div>

             <div style="margin-top: 6rem; padding-top: 5rem; border-top: 2px solid var(--accent-gold);" data-animate>
                <div style="text-align: center; margin-bottom: 3rem;">
                  <div class="hero-subtitle" style="color: var(--accent-gold);">${currentLang === 'en' ? 'In the Classroom' : 'Derslikte'}</div>
                  <h3 style="font-size: 2.2rem; font-style: italic;">${currentLang === 'en' ? 'Teaching Portfolio & Courses' : 'Öğretim Portföyü ve Dersler'}</h3>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;">
                   ${myCourses.map((course, idx) => `
                      <div style="padding: 1.5rem; border: 1px solid var(--border-sepia); background: white; box-shadow: 2px 2px 0px var(--border-sepia); border-radius: 4px;">
                         <p style="font-family: var(--font-sans); font-size: 0.65rem; color: var(--accent-gold); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem;">${course.year}</p>
                         <p style="font-weight: bold; font-size: 1.1rem; line-height: 1.3;">${currentLang === 'en' ? course.title : course.tr}</p>
                      </div>
                   `).join('')}
                </div>
             </div>
          </div>
       </div>
    </section>

    <section id="contact" style="padding: 7rem 0; border-top: 1px solid var(--border-sepia); text-align: center;">
      <div class="desk-container" data-animate>
        <div class="hero-subtitle">${currentLang === 'en' ? 'Get In Touch' : 'İletişim'}</div>
        <h2 style="font-size: 3.5rem; font-style: italic; margin-bottom: 1rem;">${currentLang === 'en' ? 'Contact' : 'İletişim'}</h2>
        <div class="ink-divider"></div>
        <p style="font-family: var(--font-sans); font-size: 0.95rem; color: var(--ink-secondary); margin-bottom: 2.5rem; max-width: 500px; margin-left: auto; margin-right: auto; line-height: 1.7;">
          ${currentLang === 'en'
            ? 'For academic inquiries, translation projects, or collaboration opportunities:'
            : 'Akademik sorular, çeviri projeleri veya iş birliği fırsatları için:'}
        </p>
        <a href="mailto:barbaros.uzunkopru@gmail.com" style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--text-ink-dark); text-decoration: none; border-bottom: 2px solid var(--accent-gold); padding-bottom: 4px; transition: color 0.3s;">
          barbaros.uzunkopru@gmail.com
        </a>
        <div style="margin-top: 3rem;">
          <a href="${linkedinUrl}" target="_blank" style="font-family: var(--font-sans); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.2em; color: var(--ink-secondary); text-decoration: none; border-bottom: 1px solid transparent; transition: border 0.3s;" onmouseover="this.style.borderColor='var(--ink-secondary)'" onmouseout="this.style.borderColor='transparent'">LinkedIn ↗</a>
        </div>
      </div>
    </section>

    <footer style="padding: 5rem 0 3rem; text-align: center; border-top: 1px solid var(--border-sepia);">
       <div style="font-size: 1.8rem; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700; margin-bottom: 0.5rem;">Dr. Barbaros Uzunköprü</div>
       <div class="ink-divider" style="width: 60px; margin: 3rem auto;"></div>
       <div style="display: flex; justify-content: center; gap: 4rem; margin-bottom: 5rem; font-family: var(--font-sans); text-transform: uppercase; letter-spacing: 0.3em; font-size: 0.75rem;">
          <a href="${linkedinUrl}" target="_blank" style="color: var(--text-ink-dark); text-decoration: none; border-bottom: 1px solid transparent; transition: border 0.3s;" onmouseover="this.style.borderColor='var(--text-ink-dark)'" onmouseout="this.style.borderColor='transparent'">LinkedIn</a>
       </div>
       <p style="font-family: var(--font-sans); font-size: 0.65rem; color: #999; letter-spacing: 0.1em; text-transform: uppercase;">
         The Translator's Desk © 2026
       </p>
    </footer>

    <div id="sample-modal" class="sample-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="sample-title" onclick="if(event.target === this) closeSample()">
      <div class="sample-modal-content">
        <button class="close-modal" onclick="closeSample()" aria-label="Close">×</button>
        <h2 id="sample-title" style="font-size: 2rem; font-style: italic; margin-bottom: 2rem; border-bottom: 1px solid var(--border-sepia); padding-bottom: 1rem;"></h2>
        <div id="sample-content" style="font-size: 1.2rem; line-height: 1.8; font-family: var(--font-serif); color: var(--text-ink-dark);">
        </div>
      </div>
    </div>
  `
  window.scrollTo(0, scrollY)
  isFirstRender = false
}

// Event delegation — attached once, never duplicates
app.addEventListener('click', (e) => {
  if (e.target.id === 'btn-en' || e.target.id === 'btn-en-mob') { currentLang = 'en'; renderApp(); setupObservers() }
  if (e.target.id === 'btn-tr' || e.target.id === 'btn-tr-mob') { currentLang = 'tr'; renderApp(); setupObservers() }

  if (e.target.id === 'hamburger') {
    const menu = document.querySelector('#mobile-menu')
    if (menu) menu.classList.toggle('open')
  }

  // Close mobile menu when a menu link is clicked
  if (['mob-about', 'mob-library', 'mob-academic', 'mob-contact'].includes(e.target.id)) {
    const menu = document.querySelector('#mobile-menu')
    if (menu) menu.classList.remove('open')
  }
})


window.openSample = (idx, event) => {
  event.stopPropagation()
  const modal = document.querySelector('#sample-modal')
  const content = document.querySelector('#sample-content')
  const title = document.querySelector('#sample-title')
  
  if (modal && content && title) {
    title.innerText = myBooks[idx].title
    const credit = '<p style="margin-top:2.5rem;font-family:var(--font-sans);font-size:0.65rem;color:var(--ink-secondary);text-transform:uppercase;letter-spacing:0.15em;border-top:1px solid var(--border-sepia);padding-top:1rem;">' + (currentLang === 'en' ? 'Sample from the Turkish translation by Dr. Barbaros Uzunköprü' : 'Dr. Barbaros Uzunköprü’nün Türkçe çevirisinden') + '</p>'
    content.innerHTML = (bookSamples[idx] || '') + credit
      
    modal.classList.add('active')
    modal.querySelector('.close-modal')?.focus()
  }
}

window.closeSample = () => {
  const modal = document.querySelector('#sample-modal')
  if (modal) modal.classList.remove('active')
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') window.closeSample()
})

// --- Intersection Observers ---
let sectionObserver = null
let navObserver = null

const setupObservers = () => {
  if (sectionObserver) sectionObserver.disconnect()
  if (navObserver) navObserver.disconnect()

  // Section entry animations
  const animatables = document.querySelectorAll('[data-animate]')
  animatables.forEach(el => el.classList.add('animate-hidden'))

  sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('animate-hidden')
        entry.target.classList.add('animate-visible')
        sectionObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  animatables.forEach(el => sectionObserver.observe(el))

  // Nav active state
  const sections = document.querySelectorAll('section[id]')
  const navLinks = document.querySelectorAll('.desk-nav .nav-link')

  navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('nav-link-active', link.getAttribute('href') === `#${entry.target.id}`)
        })
      }
    })
  }, { rootMargin: '-20% 0px -70% 0px' })

  sections.forEach(s => navObserver.observe(s))
}

// --- Scroll To Top ---
const scrollBtn = document.createElement('button')
scrollBtn.id = 'scroll-top'
scrollBtn.innerHTML = '↑'
scrollBtn.setAttribute('aria-label', 'Scroll to top')
document.body.appendChild(scrollBtn)

window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > window.innerHeight * 0.8)
}, { passive: true })

scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))

renderApp()
setupObservers()
