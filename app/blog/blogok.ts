export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  cover: string;
  coverPosition?: string;
  intro: string;
  sections: { heading: string; body: string }[];
  cta?: { label: string; href: string };
};

export const blogok: BlogPost[] = [
  {
    slug: "eskuvoszervezo-luxus-vagy-szukseglet",
    title: `Esküvőszervező: luxus vagy szükséglet? Amit minden menyasszonynak tudnia kellene`,
    description: `Felmerül a kérdés: kell-e esküvőszervező? Összefoglaltuk, mire számíthatsz, mikor érdemes szakembert fogadni, és miért mondja szinte minden pár, hogy megérte.`,
    date: "2026-07-08",
    cover: "/images/zsambek_wedding_styled_shoot-052_web.jpg",
    coverPosition: "center 45%",
    intro: `Amikor az esküvőtervezés elkezdődik, az egyik legelső kérdés, ami felmerül: kell-e esküvőszervező? Sokan luxusnak tartják, mások már az első pillanattól fogva nélkülözhetetlennek. Az igazság valahol a kettő között van, de ha valaki egyszer megtapasztalja, mit jelent ez a fajta segítség, ritkán gondol vissza úgy, hogy felesleges volt.`,
    sections: [
      {
        heading: `Mi az esküvőszervező valódi feladata?`,
        body: `Az esküvőszervező a pár képviselőjeként dolgozik: koordinálja a szolgáltatókat, vigyáz az időkeretre, kezeli az előre nem látható helyzeteket, és mindezt úgy teszi, hogy a menyasszonynak és a vőlegénynek ne kelljen aggódni semmin.

A feladatok néhány példája:
• Helyszín- és szolgáltatókutatás, ajánlatbekérés
• Szerződések átvizsgálása, tárgyalások
• Esküvői napirend elkészítése percre pontosan
• Próbajárások, ruhapróbák és fontos megbeszélések kísérése
• Az esküvő napján teljes koordináció reggeltől az utolsó vendég távozásáig

Ha kíváncsi vagy, [milyen szolgáltatásokat kínálok](/szolgaltatasok), ott részletesen leírtam, mire számíthatsz.`,
      },
      {
        heading: `"Minket is elbizonytalanított, de megérte"`,
        body: `Az egyik pár, akikkel együtt dolgoztam, így fogalmazott: "Ha valaki elbizonytalanodna az esküvőszervező szükségessége miatt, szeretnénk megerősíteni abban, hogy óriási terhet vesz le az ember válláról."

Ez a mondat sokaknak ismerős lehet, mert a bizonytalanság teljesen természetes. Az esküvőszervező egy plusz kiadásnak tűnik, főleg ha az ember még sosem szervezett esküvőt. Azonban ahogy Orsi és Krisz fogalmazták: "A saját bőrünkön tapasztaltuk meg, mekkora segítséget nyújt, és milyen hihetetlen terhet vesz le rólunk."`,
      },
      {
        heading: `Mikor érdemes esküvőszervezőt fogadni?`,
        body: `Nincs egyetlen helyes válasz, de ezek a szempontok segíthetnek:

• Ha 50 főnél több vendéget vártok: az összetettség ilyenkor már komoly koordinációt igényel
• Ha mindketten dolgoztok és nincs időtök minden részletet intézni
• Ha külföldi, különleges vagy több helyszínt érint az esküvő
• Ha fontos, hogy az esküvő napján teljesen jelen lehessetek, ne szervezőként, hanem menyasszonyként és vőlegényként
• Ha sok egyedi részletet, sok szolgáltatót szeretnétek összehangolni

A lényeg: az esküvőszervező nem veszi el az élményt. Épp ellenkezőleg: lehetővé teszi, hogy teljesen átadhassátok magatokat a napnak.`,
      },
      {
        heading: `Luxus? Inkább befektetés.`,
        body: `Az esküvőszervező valóban nem a legolcsóbb tétel, de ha belegondolsz, hogy egy nem jól koordinált szolgáltató, egy elcsúszó időpont vagy egy félreértés hogyan tud tönkreteni egy életre szóló pillanatot, más megvilágításba kerül az ár. Ha konkrét számokat keresel, [ebben a cikkben összeszedtem, mennyibe kerül egy esküvőszervező Magyarországon](/blog/mennyibe-kerul-eskuvoszervezo-magyarorszagon).

Sokan utólag mondják: "Az esküvőszervező volt az egyetlen kiadás, amiért egy percig sem bántuk meg."

[A többi visszajelzést itt olvashatod](/#velemenyek).`,
      },
      {
        heading: `Hogyan kezdjük el?`,
        body: `Az első lépés egy személyes konzultáció, ahol átbeszéljük az elképzeléseiteket, az esküvő dátumát, helyszínét és azokat a területeket, ahol a legtöbb segítségre van szükségetek. Nincs kötelezettség, csak egy nyitott, őszinte beszélgetés arról, milyen esküvőt álmodtatok meg.

[Írj nekem itt](/kapcsolat), és egyeztetünk egy időpontot. Ha előtte jobban meg szeretnél ismerni, [a Rólam oldalon](/rolam) mindent megtalálsz.`,
      },
    ],
    cta: { label: "Foglalj időpontot konzultációra", href: "/kapcsolat" },
  },
  {
    slug: "mit-kerdezz-eskuvoszervezotol-elso-talalkozoan",
    title: `Mit kérdezz meg a leendő esküvőszervezőtől az első találkozón?`,
    description: `Az első konzultáció nem csak bemutatkozás. Ez az a pillanat, amikor eldől, hogy valóban rátaláltatok-e a megfelelő emberre. Összegyűjtöttem a legfontosabb kérdéseket, amelyeket érdemes feltenni.`,
    date: "2026-07-14",
    cover: "/images/fooldal-referenciak/8..jpg",
    intro: `Az első személyes konzultáció egy nagyon fontos pillanat. Nemcsak azért, mert ekkor dől el, hogy valóban a megfelelő személyre bízzátok-e az egyik legfontosabb napotokat, hanem azért is, mert az ott feltett kérdések alapján sokkal biztosabbak lehettek a döntésetekben. Összeállítottam azokat a kérdéseket, amelyeket én magam is fontosnak tartok, hogy egy pár megkérdezzen, akár éppen engem, akár bármely más esküvőszervezőt.`,
    sections: [
      {
        heading: `Mesélj egy olyan esküvőről, amelyre igazán büszke vagy!`,
        body: `Az évek száma fontos, de önmagában nem minden. Inkább azt kérdezzétek meg, milyen típusú esküvőket szervezett már: kis létszámút vagy nagyot, beltérit vagy kültérit, egyszerűbbet vagy összetett, több helyszínes rendezvényt.

Kérjetek referenciákat, nézzetek meg galériákat, és ha van rá lehetőség, olvassatok visszajelzéseket korábbi párjaitól. Az igazi tapasztalat nem csak a számokban mutatkozik meg, hanem abban is, ahogyan a szervező mesél a munkájáról. [Az én referenciáimat itt találjátok](/referenciak).`,
      },
      {
        heading: `Hogyan szoktál dolgozni a párral a folyamat során?`,
        body: `Minden esküvőszervező másképp kommunikál és más ritmusban dolgozik. Valaki hetente küld összefoglalót, valaki csak akkor jelentkezik, ha van konkrét teendő. Valaki minden döntésbe bevonja a párt, valaki inkább önállóan intéz el mindent és csak a végeredményt mutatja meg.

Fontos, hogy megértsétek, milyen az együttműködés a gyakorlatban: mikor és hogyan érhetitek el, mennyire rugalmas az időpontok terén, és hogyan kezeli a változásokat, ha valamit másképpen szeretnétek.`,
      },
      {
        heading: `Mit tartalmaz pontosan a csomag, és mi nem tartozik bele?`,
        body: `Ez az egyik leggyakrabban elhagyott kérdés, és utólag az egyik legnagyobb forrása a félreértéseknek. Kérdezzétek meg részletesen, hogy mi szerepel az árban: benne van-e az esküvő napján a teljes koordináció, vagy az csak külön kérhető? Hány bejárást, próbát, személyes egyeztetést tartalmaz a csomag?

Egy jó esküvőszervező átlátható árazással dolgozik, és szívesen elmagyarázza, mit kaptok a pénzetekért. Ha kíváncsi vagy, mit szokott tartalmazni egy-egy csomag és mire számíthatsz árakban, [erről részletesen írtam ebben a cikkben](/blog/mennyibe-kerul-eskuvoszervezo-magyarorszagon).`,
      },
      {
        heading: `Van-e olyan szolgáltatói köröd, akikkel szívesen dolgozol együtt?`,
        body: `Az esküvőszervező egyik legfontosabb feladata, hogy összefogja a fotóst, a dekoratőrt, a cateringest, a zenészt és az összes többi közreműködőt. Kérdezzétek meg, hogyan tartja a kapcsolatot velük a folyamat során, és ki veszi fel a kapcsolatot kivel, ha valami változik.

Az is hasznos lehet tudni, hogy a szervező van-e kapcsolatban megbízható szolgáltatókkal, akiket ajánlani tud, vagy teljesen szabad kezet ad a keresésben.`,
      },
      {
        heading: `Mi történik, ha valami nem az elvártak szerint alakul a nagy napon?`,
        body: `Senki sem szeret erre gondolni, de ez az egyik legjobb kérdés, amit feltehetünk. Egy tapasztalt esküvőszervező nem ijedezik ettől a kérdéstől, hanem magabiztosan meséli, hogyan szokott kezelni váratlan helyzeteket: ha késik egy szolgáltató, ha az időjárás forgandó, ha valami az utolsó pillanatban megváltozik.

A rugalmasság és a nyugodt jelenlét a nagy napon az egyik legértékesebb dolog, amit egy jó szervező nyújtani tud.`,
      },
      {
        heading: `Hogyan érzem meg, hogy jó döntés-e?`,
        body: `Végül van egy szempont, amelyről ritkán beszélnek: a kémia. Az esküvőszervező hónapokon át kísér végig titeket egy nagyon személyes folyamaton. Fontos, hogy jól érezzétek magatokat a társaságában, hogy őszintén megoszthassátok az elképzeléseiteket, és hogy biztonságban érezzétek magatokat.

Ha az első találkozó után azt érzitek, hogy megértettük egymást, hogy meghallgatott és valóban érdekli a ti történetetek, az egy nagyon jó jel. A szakmai tapasztalat fontos, de az emberi kapcsolat ugyanolyan nélkülözhetetlen. Ha szeretnétek jobban megismerni, mielőtt felveszitek velem a kapcsolatot, [a Rólam oldalon](/rolam) többet megtudhattok rólam, [az elérhető szolgáltatásokról](/szolgaltatasok) pedig itt olvashattok.`,
      },
    ],
    cta: { label: "Foglalj időpontot konzultációra", href: "/kapcsolat" },
  },
  {
    slug: "hogyan-valassz-eskuvoi-helyszint",
    title: `Hogyan válassz esküvői helyszínt? Az 5 legfontosabb szempont`,
    description: `A helyszín az esküvő alapköve. Minden más ehhez igazodik. Összeszedtem az 5 szempontot, amelyet esküvőszervezőként mindig megnézünk, mielőtt javaslatot teszünk egy párnak.`,
    date: "2026-07-20",
    cover: "/images/fooldal-referenciak/3..jpeg",
    intro: `A helyszín az esküvő alapköve. A dekoráció, a catering, a fotós látásmódja, az esti hangulat mind ehhez igazodik. Ezért a helyszínválasztás az egyik első és legfontosabb döntés, amit meg kell hoznotok. Összeszedtem azt az 5 szempontot, amelyet mi esküvőszervezőként mindig végiggondolunk, mielőtt egy párt helyszínbejárásra viszünk.`,
    sections: [
      {
        heading: `1. Befogadóképesség és méret`,
        body: `Az első és legpraktikusabb kérdés: elfér-e mindenki kényelmesen? Fontos, hogy ne csak a névleges maximumot nézzétek, hanem azt is, hogyan alakul a tér az asztalokkal, a táncparkettel, a büfével és a zenésszel együtt.

Egy túl nagy terem üresnek hat, egy túl kicsi nyomasztó lehet. Az ideális helyszín tele van, de mégis van hely mozogni, lélegezni, és a hangulat szabad utat talál.`,
      },
      {
        heading: `2. Helyszín és megközelíthetőség`,
        body: `Gondoljatok a vendégeitek szemszögéből is: mennyire könnyen közelíthető meg a helyszín? Van-e elegendő parkoló? Ha sokan érkeznek vidékről vagy külföldről, milyen szálláslehetőségek vannak a közelben?

Az is szempont lehet, hogy a helyszín mennyire illik a saját elképzeléseitekhez: egy romantikus vidéki kastély más hangulatot teremt, mint egy modern városi terasz. [Esküvőszervezőként](/rolam) ezeket a szempontokat mindig együtt nézzük végig a párral.`,
      },
      {
        heading: `3. Hangulat és stílus`,
        body: `A helyszín önmagában is mesél. Vannak terek, amelyek minimális dekorációval is gyönyörűek, és vannak olyanok, amelyek csak alapos beöltöztetéssel válnak azzá. Gondoljátok végig, hogy az a stílus, amit elképzeltetek, illeszkedik-e a helyszín hangulatához, vagy sok pluszmunkát jelent majd összhangba hozni a kettőt.

Egy jó esküvős fotós is sokat segíthet ebben a döntésben: kérdezzetek meg valakit, aki már fotózott ott, hogyan viselkedik a fény, mi az, ami a képeken is szépen mutat.`,
      },
      {
        heading: `4. Mi tartozik a bérleti díjba?`,
        body: `Ez az egyik leggyakrabban félreértett pont. Néhány helyszín mindent biztosít: terítéket, bútorzatot, catering szolgáltatót, koordinátort. Mások csak a négy falat adják, és mindent másképpen kell megoldani.

Kérdezzetek rá részletesen: mi az, ami benne van az árban, és mi az, ami külön tétel? Hány óra áll rendelkezésetekre? Mi a helyzet a zenével, az időbeli korlátokkal? Ezek a részletek sokat számíthatnak a végső büdzsé szempontjából.`,
      },
      {
        heading: `5. Van-e saját koordinátor a helyszínen?`,
        body: `Sok helyszín biztosít saját eseménykoordinátort, aki az adott tér működését ismeri. Ez értékes, de fontos tudni: a helyszíni koordinátor a helyszín érdekeit képviseli, nem a ti érdeketeket. Ő azt nézi, hogy minden rendben legyen a teremben, de a ti teljes esküvőtöket, az összes szolgáltatóval együtt, nem feltétlenül ő vezeti végig.

Ezért az esküvőszervező és a helyszíni koordinátor két különböző szerepkör, és nagyon jól ki tudják egészíteni egymást. Ha nem vagy biztos benne, [mikor éri meg esküvőszervezőt fogadni](/blog/eskuvoszervezo-luxus-vagy-szukseglet), abban a cikkben részletesen végigvettem.`,
      },
      {
        heading: `Plusz egy: bízzatok az ösztönötökre`,
        body: `Az összes szempont végignézése után van még egy dolog, amelyet nem szabad figyelmen kívül hagyni: hogyan érzitek magatokat ott. Mikor beléptek egy helyszínre, és azt mondjátok egymásnak, hogy "igen, ez az", az egy nagyon fontos jel.

Az adatok és a számok sokat segítenek, de az esküvő végső soron egy érzés. Válasszatok olyan helyet, ahol már pusztán a gondolattól is mosolyog az arcotok. Ha szeretnétek személyes segítséget a kereséshez, [írjatok nekem](/kapcsolat) és együtt nézzük végig a lehetőségeket. Azt is érdemes tudni, hogy [mit érdemes megkérdezni egy esküvőszervezőtől](/blog/mit-kerdezz-eskuvoszervezotol-elso-talalkozoan) az első találkozón.`,
      },
    ],
    cta: { label: "Kérj személyes segítséget a helyszínválasztáshoz", href: "/kapcsolat" },
  },
  {
    slug: "mennyibe-kerul-eskuvoszervezo-magyarorszagon",
    title: `Mennyibe kerül egy esküvőszervező Magyarországon? Átlátható útmutató`,
    description: `Sokan félnek megkérdezni az árat. Összeszedtem, mit kapsz a pénzedért, mi befolyásolja a díjat, és miért nem érdemes csak az árat nézni, amikor esküvőszervezőt választasz.`,
    date: "2026-07-24",
    cover: "/images/Betti%20%26%20Levi/1.jpg",
    intro: `Az esküvőszervező ára az egyik első dolog, amit a párok keresnek, és az egyik, amiről a legkevesebbet beszélnek nyíltan. Én nem tartom titokban. Ebben a cikkben pontosan leírom, mire számíthatsz Magyarországon, mi van benne a különböző csomagokban, és milyen szempontok alapján érdemes összehasonlítani az ajánlatokat.`,
    sections: [
      {
        heading: `Milyen árkategóriák léteznek Magyarországon?`,
        body: `Az esküvőszervező díja Magyarországon széles sávban mozog, és ez nem véletlen. A különbség nem csak a névben van, hanem abban, mit kapsz valójában a pénzedért.

Három fő kategóriát érdemes megkülönböztetni:

Kezdő szervező (tapasztalat alatt 2 év): 100.000 Ft-tól indul a koordinációs szolgáltatás, a teljes körű szervezés ritkán haladja meg a 300.000 Ft-ot. Az ár alacsonyabb, de a rutinszerzés folyamatban van.

Tapasztalt szervező (2-5 év, referenciák): a koordináció 180.000 Ft körül kezdődik, a teljes körű szervezés 300.000-600.000 Ft között mozog. A legtöbb aktívan dolgozó esküvőszervező ebbe a kategóriába esik.

Prémium, elismert szervező: 600.000 Ft felett, sokszor 1.000.000 Ft közelében vagy felett. Általában kiemelkedő referenciák, szűk kapacitás és nagyon személyre szabott kiszolgálás jellemzi.

Az ár önmagában nem mond semmit. Egy alacsony ár mögött lehet kevesebb tapasztalat, kevesebb beletett idő, vagy egyszerűen másfajta csomag.`,
      },
      {
        heading: `Mit tartalmaz egy teljes körű esküvőszervezési csomag?`,
        body: `A [teljes körű esküvőszervezés](/szolgaltatasok#service-01) azt jelenti, hogy az esküvőszervező az első találkozótól az utolsó tánclépésig veled van. De mit jelent ez konkrétan?

A legtöbb ilyen csomagban benne szokott lenni:
• Helyszínkutatás és bejárások, ajánlatkérés több opcióra
• Szolgáltatók (fotós, dekoratőr, catering, zene) kiválasztásának segítése
• Szerződések átnézése, ár- és feltételtárgyalások
• Esküvői napirend elkészítése percre pontosan
• Rendszeres egyeztetések a folyamat során
• A nagy nap teljes koordinációja, a helyszínre érkezéstől az utolsó vendégig

Ami néha nem szerepel az alapcsomagban: az utazási díj, ha a helyszín messze van; a dekoráció tényleges megvásárlása (az csak koordinálva van); egyes adminisztrációs feladatok, amelyeket a párnak kell intéznie.

Mielőtt aláírsz, mindig kérd el a részletes feladatlistát. Egy jó [esküvőszervező átlátható árazással](/blog/mit-kerdezz-eskuvoszervezotol-elso-talalkozoan) dolgozik, és szívesen elmagyarázza, mi van benne és mi nincs.`,
      },
      {
        heading: `A "30 nap a nagy napig" csomag — mikor éri meg?`,
        body: `A [30 nap a nagy napig](/szolgaltatasok#service-02) csomag azoknak szól, akik a legtöbb szervezést maguk vállalják, de az utolsó egyenes előtt szeretnének egy tapasztalt kezet, aki átveszi a koordinációt.

Ez a csomag általában a következőket foglalja magában:
• Az összes addigi szervező tevékenység átvétele, átvilágítása
• Szolgáltatókkal való egyeztetés, megerősítés
• Pontos napirend elkészítése
• Az esküvő napján teljes koordináció

Ára Magyarországon jellemzően 150.000-350.000 Ft között mozog. Akkor a legjobb választás, ha van önbizalmad és időd az előzetes szervezéshez, de nem szeretnél az esküvőd napján is szervezőként dolgozni.`,
      },
      {
        heading: `Az esküvői tanácsadás: a legolcsóbb belépő`,
        body: `Az [esküvői tanácsadás](/szolgaltatasok#service-03) egy-két alkalmat jelent, ahol egy szakemberrel átnézitek a helyzetet, a terveket, az eddigi döntéseket, és kapsz konkrét útmutatást a következő lépésekre.

Ára alkalmanként 15.000-30.000 Ft között szokott lenni. Nagyon hasznos lehet, ha:
• Elakadtatok a szervezésben és nem tudjátok, hol tartsatok
• Nem vagytok biztosak egy-egy döntésben (helyszín, büdzsé, sorrend)
• Egyszer szeretnétek átbeszélni egy szakemberrel, de nem tervezitek a teljes szervezés kiszervezését

A tanácsadás nem helyettesíti a koordinációt, de sok pár számára ez az első lépés, ami után döntik el, hogy tovább mennek-e együtt.`,
      },
      {
        heading: `Mi befolyásolja az árat?`,
        body: `Nem minden 200.000 Ft-os ajánlat ugyanannyit ér, és nem minden 500.000 Ft-os sem. Ezek a tényezők befolyásolják, hogy egy szervező mire kér ennyit:

Tapasztalat és referenciák: egy esküvőszervező, aki 20-30 esküvőn van túl és [konkrét visszajelzéseket](/referenciak) tud mutatni, más minőséget képvisel, mint egy frissen induló kolléga.

Helyszín és logisztika: ha a helyszín messze van, ha több helyszínt érint az esküvő, ha különleges koordinációt igényel, az emeli a díjat.

Vendégszám: 30 és 200 fős esküvő szervezése egészen más terhelést jelent. Nagyobb esküvőnél több az egyeztetés, a logisztika, a nap alatti koordináció.

Egyediség: ha nagyon speciális elképzeléseitek vannak, külföldi szolgáltatókat kerestek, vagy teljesen egyedi koncepciót szeretnétek, az több munkát jelent, amit az ár tükröz.`,
      },
      {
        heading: `Mire figyeljetek az ajánlatok összehasonlításakor?`,
        body: `Amikor több esküvőszervezőtől kaptok ajánlatot, ne csak a végösszeget nézzétek. Ezeket is érdemes összehasonlítani:

Mi van pontosan benne? Néhány szervező sok mindent csak külön számol fel, ami másoknál benne van az árban. Egy látszólag olcsóbb ajánlat végül drágább is lehet.

Hány személyes találkozót tartalmaz? Néhány csomagban csak online egyeztetés van, más szervező személyesen is elmegy veled a helyszínre, a virágoshoz, a ruhára.

Mi történik, ha valami megváltozik? A jó szerződés tisztázza, mi van, ha elmarad az esküvő, ha változik a dátum, ha extra feladatok merülnek fel.

Az [első találkozón](/blog/mit-kerdezz-eskuvoszervezotol-elso-talalkozoan) ezek mindegyikét érdemes megkérdezni. Ne félj pontos választ várni.`,
      },
      {
        heading: `Megéri-e az ár?`,
        body: `Ezt a kérdést sokszor megkapom. A válaszom mindig az, hogy attól függ, mit értékeltek.

Ha az idő értékes nektek, ha fontos, hogy a nagy napon ne szervezőként dolgozzatok, ha olyan emberrel szeretnétek dolgozni, aki már volt ott és tudja, mi jöhet, akkor igen, megéri.

A legtöbb pár, aki dolgozott már esküvőszervezővel, utólag azt mondja: ez volt az egyetlen kiadás, amit nem bántunk meg. Nem azért, mert olcsó volt, hanem azért, mert látszott az értéke minden pillanatban.

Ha még nem vagy biztos benne, [olvass utána](/blog/eskuvoszervezo-luxus-vagy-szukseglet) mit mondanak azok, akik már átmentek ezen. Nem reklám, hanem valódi tapasztalat.`,
      },
      {
        heading: `Mi a helyzet nálam?`,
        body: `Én Budapest és Magyarország szerte dolgozom, és az áraimat mindig az adott pár igényeihez igazítom. Nem dolgozom rejtett költségekkel és nem kérek előre mindent.

Ha szeretnéd tudni, hogy a ti esküvőtökre mi lenne az ideális megoldás, és mennyibe kerülne, [írj nekem](/kapcsolat) és egyeztetünk. Az első konzultáció díjmentes, és semmihez nem kötelez.

Ha kíváncsi vagy, kik dolgoztunk már együtt és hogyan élték meg, [nézd meg a referenciáimat](/referenciak). Minden pár valódi, minden visszajelzés tényleges tapasztalat alapján született.`,
      },
    ],
    cta: { label: "Kérj díjmentes konzultációt", href: "/kapcsolat" },
  },
  {
    slug: "30-nappal-eskuvo-elott-mit-kell-elintezni",
    title: `30 nappal az esküvő előtt: mit kell elintézni, és miért éri meg egy szervező a végén?`,
    description: `Az utolsó hónap az esküvő előtt a legsűrűbb. Összeszedtem, mi az, ami biztosan előkerül, mire érdemes figyelni, és miért választják sokan ezt az időszakot arra, hogy egy koordinátort vonjanak be.`,
    date: "2026-07-29",
    cover: "/images/insta/3.jpg",
    coverPosition: "center 35%",
    intro: `Az esküvő előtti utolsó 30 nap az az időszak, amikor a legtöbb pár azt érzi: minden egyszerre van, és semmi sem áll még rendesen a helyén. Megerősítések, próbák, ültetési rend, utolsó egyeztetések, visszajelzések, és közben az ember azt szeretné, hogy ez az időszak valahogyan öröm is legyen, ne csak teher. Összeszedtem, mi az, ami szinte minden esküvőnél előkerül az utolsó hónapban, és hogyan lehet ezt jól csinálni.`,
    sections: [
      {
        heading: `Erősítsd meg az összes szolgáltatót`,
        body: `Az utolsó 30 napban minden szerződéses partnerrel érdemes felvenni a kapcsolatot és megerősíteni az időpontot, a pontos programot és a teendőket. Ez vonatkozik a fotósra, a videósra, a zenészre, a cateringesre, a dekorosra, a sminkes-fodrász párosra és természetesen a helyszínre is.

Ne feltételezd, hogy mert le van szerződve, mindenki pontosan emlékszik a részletekre. Egy rövid egyeztetés most sok fejfájástól kímél meg a nagy napon. Ha a szervező ilyenkor már részt vesz a folyamatban, ezt az átvilágítást ő végzi el helyetted, és ha valahol hiányosságot talál, még van idő rendezni.`,
      },
      {
        heading: `Az ültetési rend: mindenki réme`,
        body: `Ha van egy dolog, ami szinte minden párt meglepetésként ér, az az ültetési rend. Egyrészt bonyolultabb, mint gondolnád, másrészt az utolsó héten mindig jön néhány lemondás vagy plusz vendég, ami az egészet átírja.

Érdemes az ültetési rendet a visszajelzési határidő után, de legalább 2 héttel a nagy nap előtt elkezdeni. Vedd figyelembe a kapcsolatokat, a különleges igényeket (mozgáskorlátozottak, kisgyerekesek), és azt, hogy ki mennyire szereti a táncparketthez közeli helyet. Ha bizonytalannak érzed magad, hogy hol üljenek a rokonok és hol az ismerősök, egy tapasztalt szervező sokszor csak ránézésre tud rendet vágni a káoszban.`,
      },
      {
        heading: `A napirend, ami tényleg működik`,
        body: `A legtöbb esküvőn van napirend. A legtöbb esküvőn ez a napirend az első órában csúszik. Ez nem feltétlenül baj, ha van valaki, aki látja az egészet és tud alkalmazkodni.

A jó napirend nem csak az időpontokat tartalmazza, hanem azt is, hogy ki hol tartózkodik, ki kit kísér, melyik szolgáltató mikor érkezik a helyszínre, és mi az, ami nem látszik a vendégek számára, de a háttérben pontosan ütemezve kell lennie. Az elkészítéséhez szükség van arra, hogy mindenki visszajelezzen: a helyszín, a pap vagy szertartásvezető, az összes közreműködő. Ha ezt még nem kérdezted le, most van itt az ideje.

Ha kíváncsi vagy, [mit érdemes megkérdezni a szervezőtől az első találkozón](/blog/mit-kerdezz-eskuvoszervezotol-elso-talalkozoan), ott a napirend is szóba kerül.`,
      },
      {
        heading: `Próbák és utolsó bejárás`,
        body: `Az utolsó hónapban általában sorra kerül a menyasszonyi ruha utolsó próbája, a vőlegény öltönyének átvétele, és ideális esetben egy helyszínbejárás is, ahol a dekoros, az esküvőszervező és a pár együtt végigjárja a teret.

Ez a bejárás nem formális: inkább arról szól, hogy mindenki fejében legyen egy közös kép arról, hogyan fog kinézni a nap. Hogy lesznek elrendezve az asztalok, melyik ajtón vonul be a menyasszony, hol lesz a fotózás helyszíne, hol lesz a gyereksarok. Az ilyen apróságok sokszor az utolsó pillanatban kerülnek elő, ha nem gondolkodtunk rajtuk előre.`,
      },
      {
        heading: `Praktikus teendők, amikről sokan megfeledkeznek`,
        body: `Az utolsó hónapban ezek szoktak még előkerülni:

• Kifizetések előkészítése borítékokba a szolgáltatóknak
• Esküvői forgatókönyv és ültetési rend kinyomtatása
• Autó, szállás és transzfer szervezése a násznépnek
• A végleges vendéglista és létszám leadása a helyszínnek és a cateringnek
• A cateringnek leadni az étkezési igényeket (vegetáriánus, allergia)
• A nászút csomagolása és a dokumentumok ellenőrzése
• Zenei lista véglegesítése és leadása a zenésznek vagy DJ-nek

Ezek önmagában mind aprók, de ha egyszerre érkeznek, könnyen elveszik valamelyik.`,
      },
      {
        heading: `Miért választják sokan az utolsó hónapot arra, hogy bevonnak egy szervezőt?`,
        body: `Sokszor hallani, hogy a párok az elejétől fogva egyedül szerveznek, de az utolsó hónapban döntenek úgy, hogy kell valaki, aki átveszi a stafétát. Ez teljesen érthető döntés, és van egy kifejezetten erre a helyzetre kialakított megoldás.

A [30 nap a nagy napig csomag](/szolgaltatasok#service-02) pontosan ezt a helyzetet kezeli: valaki, aki átveszi az addig összeszedett szálakat, ellenőrzi a hiányosságokat, elkészíti vagy pontosítja a napirendet, egyeztet a szolgáltatókkal, és ott van a nagy napon, hogy semmi ne csússzon el.

Ha eddig magatok szerveztetek és jól boldogultatok, ez a csomag nem kritika. Azt jelenti, hogy az utolsó egyenesen már nem kell egyedül hajtani. [Ebben a cikkben részletesen összeszedtem, mennyibe kerül egy ilyen csomag](/blog/mennyibe-kerul-eskuvoszervezo-magyarorszagon), ha szeretnéd átlátni a számokat.`,
      },
      {
        heading: `Az utolsó hét`,
        body: `Az esküvő előtti utolsó hét már nem a szervezésről szól. Erre az időre az összes teendőnek rendezettnek kell lennie, hogy te valóban jelen lehess. Pihenhess, a párododdal lehess, és ne egy Excel-táblát bámulj hajnalig.

Ha valaki gondoskodik arról, hogy addigra minden a helyére kerüljön, az az egyik legnagyobb ajándék, amit magatoknak adhattok. [Nézd meg a referenciáimat](/referenciak), ott konkrét párokat és visszajelzéseket találsz, akikkel együtt dolgoztam. Ha pedig szeretnéd, hogy a te esküvőd előtti hónap is rendezett legyen, [írj nekem](/kapcsolat) és megnézzük, miben tudok segíteni.`,
      },
    ],
    cta: { label: "Kérdezz rá a 30 napos csomagra", href: "/kapcsolat" },
  },
  {
    slug: "eskuvoi-nap-a-szervezo-szemevel",
    title: `Hogyan néz ki az esküvői napod a szervező szemével?`,
    description: `Amit ti nem láttok, de éreztetek: a háttérben folyamatosan dolgozik valaki, hogy minden a helyére kerüljön. Mutatom, hogyan telik egy esküvői nap az én oldalamról.`,
    date: "2026-08-22",
    cover: "/images/egyeb-12.jpg",
    coverPosition: "center 40%",
    intro: `Sok pár megkérdezi tőlem az esküvő után: "De te mikor ettél egyáltalán?" Vagy: "Mikor érkezett meg a torta?" A válasz: ott voltam, és közben jártam, telefonáltam, mosolyogtam, és gondoskodtam arról, hogy ti semmit ne érezzetek abból, ami a háttérben zajlott. Ez a cikk nem arról szól, amit ti megéltek a nagy napon. Ez arról szól, ami közben történik, csak máshonnan nézve.`,
    sections: [
      {
        heading: `Reggel, jóval azelőtt, hogy a menyasszony felébred`,
        body: `A nagy napon én általában a legelsők között vagyok talpon. Az első telefonhívás néha még reggel 7 előtt érkezik, mert valamelyik szolgáltató egy kérdéssel nyit. Ez rendben van, erre vagyok ott.

Ellenőrzöm a napirendet, még egyszer végigmegyek a listán:
• Hány órakor érkezik a dekoros?
• Mikor jön a ceremóniamester?
• Van-e bármi, ami az előző nap óta változott?

Ha bármelyik szolgáltatónak kérdése van, vagy valami késik, én intézem el, mielőtt az bárkit megzavarna.`,
      },
      {
        heading: `A helyszínen: mielőtt megérkeznek a vendégek`,
        body: `Amikor megérkezem a helyszínre, elkezdődik az egyik legfontosabb rész: az ellenőrzés. Végigmegyek a helyszínen, megnézem, hogy az asztalok a napirend szerinti elrendezésben állnak-e, a dekoráció úgy néz-e ki, ahogyan megálmodtátok.

Ezt nem azért teszem, mert nem bízom a szolgáltatókban. Hanem azért, mert az én szemem arra van beállítva, hogy meglássa a kicsit félrecsúszott széket a díszített asztalsorban, a megfeledkezett gyertyát a sarokban, vagy azt az apróságot, ami egy nagy napon igenis számít.`,
      },
      {
        heading: `A szertartás`,
        body: `A szertartás előtt én már a helyszínen vagyok, jelzem a szolgáltatóknak, hogy minden a menetrendnek megfelelően alakul, és gondoskodom arról, hogy a pár nyugodtan, felkészülten érjen a pillanathoz.

Közben figyelek az időre. Ha a szertartás 5 percet csúszik, az még rendben van. Ha 15-öt, már számolom, hogy a vacsora időzítésébe belefér-e, és ha kell, szólok a cateringnek.

A szertartás alatt én a háttérben vagyok. Ti azt érzitek, hogy minden magától megy. Ez az érzés nem a véletlennek köszönhető.`,
      },
      {
        heading: `Az átmenet: a szertartástól a vacsoráig`,
        body: `Ez az egyik legnehezebb rész, amit a legtöbb pár nem is észlel.

Miután a szertartás véget ért, elkezdődik a fotózás, az ölelések, a gratulációk. Közben én koordinálom, hogy mikor induljon a buli, mikor vonul be a pár a vacsorahelyiségbe, és hogyan zajlik az átmenet anélkül, hogy bárki eltévedjen vagy várakozzon.

Ha a fotós kér még 10 percet, én szólok a cateringnek, hogy toljuk kicsit a vacsora kezdetét. Ha valamelyik vendég nem találja a helyét, én megmutatom. Ezek apróságok, de épp ezek azok, amelyek összetartják a napot.`,
      },
      {
        heading: `Vacsora, beszédek, este`,
        body: `A vacsora alatt én akkor nyugszom meg egy kicsit, ha látom, hogy mindenki jól van, a felszolgálás gördülékenyen megy, és a beszédek listája kész van a kezemnél.

Közben figyelek, hogy a tortabevonulás időzítése illeszkedik-e a zene üteméhez, hogy a DJ tudja-e, mikor kell váltani, és hogy a meglepetések, ha vannak, pontosan akkor történjenek, amikor terveztük.

Az esti program alatt én a háttérben vagyok. Ha minden rendben megy, szinte észrevétlen. De ha valami nem stimmel, ott vagyok.`,
      },
      {
        heading: `Az utolsó tánc után`,
        body: `Amikor az utolsó vendég elköszön, és ti már csak egymást látjátok, én még ott vagyok egy kicsit. Összeszedem a személyes tárgyaitokat, átadom az ajándékborítékokat, és egyeztetem a helyszínnel, hogy másnap hogyan zajlik a bontás.

Csak ezután megyek haza.

Ti nem láttatok sokat ebből. De én ott voltam az egész nap alatt, és pontosan ez a dolgom. [Ha kíváncsi vagy, milyen csomagokban érhető el ez a fajta jelenlét, itt mindent megtalálsz](/szolgaltatasok). [A korábbi párok visszajelzéseit pedig itt olvashatod](/referenciak), akik átélték ezt a napot a saját szemszögükből.`,
      },
    ],
    cta: { label: "Kérdezz rá a lehetőségekre", href: "/kapcsolat" },
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogok.find((b) => b.slug === slug);
}
