export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  cover: string;
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
    intro: `Amikor az esküvőtervezés elkezdődik, az egyik legelső kérdés, ami felmerül: kell-e esküvőszervező? Sokan luxusnak tartják, mások már az első pillanattól fogva nélkülözhetetlennek. Az igazság valahol a kettő között van – de ha valaki egyszer megtapasztalja, mit jelent ez a fajta segítség, ritkán gondol vissza úgy, hogy felesleges volt.`,
    sections: [
      {
        heading: `Mi az esküvőszervező valódi feladata?`,
        body: `Az esküvőszervező nem csak a virágokat rendeli meg és a helyszínt foglalja le. A pár képviselőjeként dolgozik: koordinálja a szolgáltatókat, vigyáz az időkeretre, kezeli az előre nem látható helyzeteket – és mindezt úgy, hogy a menyasszonynak és a vőlegénynek ne kelljen aggódni semmin.

A feladatok néhány példája:
• Helyszín- és szolgáltatókutatás, ajánlatbekérés
• Szerződések átvizsgálása, tárgyalások
• Esküvői napirend elkészítése percre pontosan
• Próbajárások, ruhapróbák és fontos megbeszélések kísérése
• Az esküvő napján teljes koordináció reggeltől az utolsó vendég távozásáig`,
      },
      {
        heading: `"Minket is elbizonytalanított – de megérte"`,
        body: `Ani és Peti, akiknek esküvőjét Nicol szervezte, így fogalmaztak: "Ha valaki elbizonytalanodna az esküvőszervező szükségessége miatt, szeretnénk megerősíteni abban, hogy óriási terhet vesz le az ember válláról."

Ez a mondat sokaknak ismerős lehet – mert a bizonytalanság teljesen természetes. Az esküvőszervező egy plusz kiadásnak tűnik, főleg ha az ember még sosem szervezett esküvőt. Azonban ahogy Orsi és Krisz fogalmazták: "A saját bőrünkön tapasztaltuk meg, mekkora segítséget nyújt, és milyen hihetetlen terhet vesz le rólunk."`,
      },
      {
        heading: `Mikor érdemes esküvőszervezőt fogadni?`,
        body: `Nincs egyetlen helyes válasz, de ezek a szempontok segíthetnek:

• Ha 50 főnél több vendéget vártok – az összetettség ilyenkor már komoly koordinációt igényel
• Ha mindketten dolgoztok és nincs időtök minden részletet intézni
• Ha külföldi, különleges vagy több helyszínt érint az esküvő
• Ha fontos, hogy az esküvő napján teljesen jelen lehessetek – ne szervezők, hanem menyasszony és vőlegény legyetek
• Ha sok egyedi részletet, sok szolgáltatót szeretnétek összehangolni

A lényeg: az esküvőszervező nem veszi el az élményt – épp ellenkezőleg, lehetővé teszi, hogy teljesen átadhassátok magatokat a napnak.`,
      },
      {
        heading: `Luxus? Inkább befektetés.`,
        body: `Az esküvőszervező valóban nem a legolcsóbb tétel – de ha belegondolsz, hogy egy nem jól koordinált szolgáltató, egy elcsúszó időpont vagy egy félreértés hogyan tud tönkreteni egy életre szóló pillanatot, más megvilágításba kerül az ár.

Sokan utólag mondják: "Az esküvőszervező volt az egyetlen kiadás, amiért egy percig sem bántuk meg."

Dr. Pozsonyi Petra így fogalmazott: "Nekünk, résztvevőknek csupán egy feladatunk volt: igazán jól érezni magunkat. Nem is kérdés, ha egyszer férjhez megyek, kire fogom rábízni az esküvőmet."`,
      },
      {
        heading: `Hogyan kezdjük el?`,
        body: `Az első lépés egy személyes konzultáció, ahol átbeszéljük az elképzeléseiteket, az esküvő dátumát, helyszínét és azokat a területeket, ahol a legtöbb segítségre van szükségetek. Nincs kötelezettség – csak egy nyitott, őszinte beszélgetés arról, milyen esküvőt álmodtatok meg.`,
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
        heading: `Milyen tapasztalatod van, és láthatok korábbi munkáiból?`,
        body: `Az évek száma fontos, de önmagában nem minden. Inkább azt kérdezzétek meg, milyen típusú esküvőket szervezett már: kis létszámút vagy nagyot, beltérit vagy kültérit, egyszerűbbet vagy összetett, több helyszínes rendezvényt.

Kérjetek referenciákat, nézzetek meg galériákat, és ha van rá lehetőség, olvassatok visszajelzéseket korábbi párjaitól. Az igazi tapasztalat nem csak a számokban mutatkozik meg, hanem abban is, ahogyan a szervező mesél a munkájáról.`,
      },
      {
        heading: `Hogyan szoktál dolgozni a párral a folyamat során?`,
        body: `Minden esküvőszervező másképp kommunikál és más ritmusban dolgozik. Valaki hetente küld összefoglalót, valaki csak akkor jelentkezik, ha van konkrét teendő. Valaki minden döntésbe bevonja a párt, valaki inkább önállóan intéz el mindent és csak a végeredményt mutatja meg.

Fontos, hogy megértsétek, milyen az együttműködés a gyakorlatban: mikor és hogyan érhetitek el, mennyire rugalmas az időpontok terén, és hogyan kezeli a változásokat, ha valamit másképpen szeretnétek.`,
      },
      {
        heading: `Mit tartalmaz pontosan a csomag, és mi nem tartozik bele?`,
        body: `Ez az egyik leggyakrabban elhagyott kérdés, és utólag az egyik legnagyobb forrása a félreértéseknek. Kérdezzétek meg részletesen, hogy mi szerepel az árban: benne van-e az esküvő napján a teljes koordináció, vagy az csak külön kérhető? Hány bejárást, próbát, személyes egyeztetést tartalmaz a csomag?

Egy jó esküvőszervező átlátható árazással dolgozik, és szívesen elmagyarázza, mit kaptok a pénzetekért.`,
      },
      {
        heading: `Hogyan koordinálod a szolgáltatókat?`,
        body: `Az esküvőszervező egyik legfontosabb feladata, hogy összefogja a fotóst, a dekoratőrt, a catererst, a zenészt és az összes többi közreműködőt. Kérdezzétek meg, hogyan tartja a kapcsolatot velük a folyamat során, és ki veszi fel a kapcsolatot kivel, ha valami változik.

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

Ha az első találkozó után azt érzitek, hogy megértettük egymást, hogy meghallgatott és valóban érdekli a ti történetetek, az egy nagyon jó jel. A szakmai tapasztalat fontos, de az emberi kapcsolat ugyanolyan nélkülözhetetlen.`,
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

Az is szempont lehet, hogy a helyszín mennyire illik a saját elképzeléseitekhez: egy romantikus vidéki kastély más hangulatot teremt, mint egy modern városi terasz.`,
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

Ezért az esküvőszervező és a helyszíni koordinátor két különböző szerepkör, és nagyon jól ki tudják egészíteni egymást.`,
      },
      {
        heading: `Plusz egy: bízzatok az ösztönötökre`,
        body: `Az összes szempont végignézése után van még egy dolog, amelyet nem szabad figyelmen kívül hagyni: hogyan érzitek magatokat ott. Mikor beléptek egy helyszínre, és azt mondjátok egymásnak, hogy "igen, ez az", az egy nagyon fontos jel.

Az adatok és a számok sokat segítenek, de az esküvő végső soron egy érzés. Válasszatok olyan helyet, ahol már pusztán a gondolattól is mosolyog az arcotok.`,
      },
    ],
    cta: { label: "Kérj személyes segítséget a helyszínválasztáshoz", href: "/kapcsolat" },
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogok.find((b) => b.slug === slug);
}
