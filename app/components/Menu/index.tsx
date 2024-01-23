"use client";
import { useState } from "react";
import React from "react";
import { MenuProps } from "./types";
import InputMask from "react-input-mask";
import * as Yup from "yup";
import PhoneInput from "../PhoneInput";
import "./index.scss";

const Index = ({ title }: MenuProps) => {
  const [formValues, setFormValues] = useState({
    subeAdi: "",
    telefon: "",
    ad: "",
    soyad: "",
    il: "",
    ilce: "",
    adres: "",
    varsayilanAdres: false,
    faturaAdresi: false,
    tckn: "",
  });
  const [inputErrors, setInputErrors] = useState<
    Record<keyof typeof formValues, boolean>
  >({
    subeAdi: false,
    telefon: false,
    ad: false,
    soyad: false,
    il: false,
    ilce: false,
    adres: false,
    varsayilanAdres: false,
    faturaAdresi: false,
    tckn: false,
  });

  const handleInputChange = (
    fieldName: keyof typeof formValues,
    value: string
  ) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
    setInputErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: false,
    }));
  };

  const handleCheckbox1Change = () => {
    setFormValues((prevValues) => ({
      ...prevValues,
      varsayilanAdres: !prevValues.varsayilanAdres,
      faturaAdresi: !prevValues.varsayilanAdres
        ? false
        : prevValues.faturaAdresi,
    }));
  };

  const handleCheckbox2Change = () => {
    setFormValues((prevValues) => ({
      ...prevValues,
      faturaAdresi: !prevValues.faturaAdresi,
      varsayilanAdres: !prevValues.faturaAdresi
        ? false
        : prevValues.varsayilanAdres,
    }));
  };

  const handleSave = () => {
    const errors: Record<keyof typeof formValues, boolean> = {
      subeAdi: false,
      telefon: false,
      ad: false,
      soyad: false,
      il: false,
      ilce: false,
      adres: false,
      varsayilanAdres: false,
      faturaAdresi: false,
    };
    let hasErrors = false;

    Object.keys(formValues).forEach((key) => {
      const fieldName = key as keyof typeof formValues;
      if (!formValues[fieldName] && typeof formValues[fieldName] === "string") {
        errors[fieldName] = true;
        hasErrors = true;
      }
    });

    setInputErrors(errors);

    // Eğer formda hata yoksa, formu sıfırlayın
    if (!hasErrors) {
      setFormValues({
        subeAdi: "",
        telefon: "",
        ad: "",
        soyad: "",
        il: "",
        ilce: "",
        adres: "",
        varsayilanAdres: false,
        faturaAdresi: false,
      });
    }
  };

  const [ilListVisible, setIlListVisible] = useState(false);
  const [ilceListVisible, setIlceListVisible] = useState(false);

  const [ilceListesi, setIlceListesi] = useState<Ilceler>({});
  const [selectedIl, setSelectedIl] = useState<string>("");

  const iller = [
    "Adana",
    "Adıyaman",
    "Afyonkarahisar",
    "Ağrı",
    "Amasya",
    "Ankara",
    "Antalya",
    "Artvin",
    "Aydın",
    "Balıkesir",
    "Bilecik",
    "Bingöl",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Çanakkale",
    "Çankırı",
    "Çorum",
    "Denizli",
    "Diyarbakır",
    "Edirne",
    "Elazığ",
    "Erzincan",
    "Erzurum",
    "Eskişehir",
    "Gaziantep",
    "Giresun",
    "Gümüşhane",
    "Hakkari",
    "Hatay",
    "Isparta",
    "Mersin",
    "İstanbul",
    "İzmir",
    "Kars",
    "Kastamonu",
    "Kayseri",
    "Kırklareli",
    "Kırşehir",
    "Kocaeli",
    "Konya",
    "Kütahya",
    "Malatya",
    "Manisa",
    "Kahramanmaraş",
    "Mardin",
    "Muğla",
    "Muş",
    "Nevşehir",
    "Niğde",
    "Ordu",
    "Rize",
    "Sakarya",
    "Samsun",
    "Siirt",
    "Sinop",
    "Sivas",
    "Tekirdağ",
    "Tokat",
    "Trabzon",
    "Tunceli",
    "Şanlıurfa",
    "Uşak",
    "Van",
    "Yozgat",
    "Zonguldak",
    "Aksaray",
    "Bayburt",
    "Karaman",
    "Kırıkkale",
    "Batman",
    "Şırnak",
    "Bartın",
    "Ardahan",
    "Iğdır",
    "Yalova",
    "Karabük",
    "Kilis",
    "Osmaniye",
    "Düzce",
  ];

  const ilceler: Ilceler = {
    Adana: [
      "Aladağ",
      "Ceyhan",
      "Çukurova",
      "Feke",
      "İmamoğlu",
      "Karaisalı",
      "Karataş",
      "Kozan",
      "Pozantı",
      "Saimbeyli",
      "Sarıçam",
      "Seyhan",
      "Tufanbeyli",
      "Yumurtalık",
    ],
    Adıyaman: [
      "Besni",
      "Çelikhan",
      "Gerger",
      "Gölbaşı",
      "Kahta",
      "Merkez",
      "Samsat",
      "Sincik",
      "Tut",
    ],
    Afyonkarahisar: [
      "Başmakçı",
      "Bayat",
      "Bolvadin",
      "Çay",
      "Çobanlar",
      "Dazkırı",
      "Dinar",
      "Emirdağ",
      "Evciler",
      "Hocalar",
      "İhsaniye",
      "İscehisar",
      "Kızılkaya",
      "Kocatepe",
      "Merkez",
      "Sandıklı",
      "Sinanpaşa",
      "Sultandağı",
      "Şuhut",
    ],
    Ağrı: [
      "Diyadin",
      "Doğubayazıt",
      "Eleşkirt",
      "Hamur",
      "Merkez",
      "Patnos",
      "Taşlıçay",
      "Tut",
    ],
    Amasya: [
      "Göynücek",
      "Gümüşhacıköy",
      "Hamamözü",
      "Merzifon",
      "Suluova",
      "Taşova",
    ],
    Ankara: [
      "Akyurt",
      "Altındağ",
      "Ayaş",
      "Bala",
      "Beypazarı",
      "Çamlıdere",
      "Çankaya",
      "Çubuk",
      "Elmadağ",
      "Etimesgut",
      "Evren",
      "Gölbaşı",
      "Güdül",
      "Haymana",
      "Kalecik",
      "Kazan",
      "Keçiören",
      "Kızılcahamam",
      "Mamak",
      "Nallıhan",
      "Polatlı",
      "Sereflikochisar",
      "Yenimahalle",
    ],
    Antalya: [
      "Akseki",
      "Aksu",
      "Alanya",
      "Demre",
      "Döşemealtı",
      "Elmalı",
      "Finike",
      "Gazipaşa",
      "Gündoğmuş",
      "İbradı",
      "Kale",
      "Kaş",
      "Kemer",
      "Kepez",
      "Konyaaltı",
      "Korkuteli",
      "Kumluca",
      "Manavgat",
      "Muratpaşa",
      "Serik",
    ],
    Artvin: [
      "Ardanuç",
      "Arhavi",
      "Borçka",
      "Hopa",
      "Kemalpaşa",
      "Murgul",
      "Şavşat",
      "Yusufeli",
    ],
    Aydin: [
      "Bozdoğan",
      "Buharkent",
      "Çine",
      "Didim",
      "Efeler",
      " Germencik",
      " İncirliova",
      " Karacasu",
      " Karpuzlu",
      " Koçarlı",
      " Köşk",
      " Kuşadası",
      " Kuyucak",
      " Nazilli",
      " Söke",
      " Sultanhisar",
      " Yenipazar",
    ],
    Balikesir: [
      "Altıeylül",
      "Ayvalık",
      "Balya",
      "Bandırma",
      "Bigadiç",
      "Burhaniye",
      "Dursunbey",
      "Edremit",
      "Erdek",
      "Gönen",
      "Havran",
      "İvrindi",
      "Karesi",
      "Kepsut",
      "Manyas",
      "Marmara",
      "Savaştepe",
      "Sındırgı",
      "Susurluk",
    ],
    Bilecik: [
      "Büyükorhan",
      "Gölpazarı",
      "İnhisar",
      "İznik",
      "Karacabey",
      "Keles",
      "Kestel",
      "Mudanya",
      "Mustafakemalpaşa",
      "Nilüfer",
      "Orhaneli",
      "Orhangazi",
      "Osmangazi",
      "Yenişehir",
      "Yıldırım",
    ],
    Bingöl: [
      "Adaklı",
      "Genç",
      "Karlıova",
      "Kiğı",
      "Solhan",
      "Yayladere",
      "Yedisu",
    ],
    Bitlis: ["Adilcevaz", "Ahlat", "Güroymak", "Hizan", "Mutki", "Tatvan"],
    Bolu: [
      "Gerede",
      "Göynük",
      "Kıbrıscık",
      "Mengen",
      "Mudurnu",
      "Seben",
      "Yeniçağa",
    ],
    Burdur: [
      "Ağlasun",
      "Altınyayla",
      "Bucak",
      "Çavdır",
      "Çeltikçi",
      "Gölhisar",
      "Karamanlı",
      "Kemer",
      "Tefenni",
      "Yeşilova",
    ],
    Bursa: [
      "Osmangazi",
      " Nilüfer",
      "Yıldırım",
      "Büyükorhan",
      "Gemlik",
      "Gürsu",
      "Harmancık",
      "İnegöl",
      "İznik",
      "Karacabey",
      "Keles",
      "Kestel",
      " Mudanya",
      "Mustafakemalpaşa",
      "Orhaneli",
      " Orhangazi",
      "Yenişehir",
    ],
    Çankırı: [
      "Atkaracalar",
      "Bayramören",
      "Çerkeş",
      "Eldivan",
      "Ilgaz",
      "Kızılırmak",
      "Korgun",
      "Kurşunlu",
      "Orta",
      "Şabanözü",
      "Yapraklı",
    ],
    Çorum: [
      "Alaca",
      "Bayat",
      "Boğazkale",
      "Dodurga",
      "İskilip",
      "Kargı",
      "Laçin",
      "Mecitözü",
      "Oğuzlar",
      "Ortaköy",
      "Osmancık",
      "Sungurlu",
      "Uğurludağ",
    ],
    Denizli: [
      "Acıpayam",
      "Babadağ",
      "Baklan",
      "Bekilli",
      "Beyağaç",
      "Bozkurt",
      "Buldan",
      "Çal",
      "Çameli",
      "Çardak",
      "Çivril",
      "Güney",
      "Honaz",
      "Kale",
      "Pamukkale",
      "Sarayköy",
      "Serinhisar",
      "Tavas",
    ],
    Diyarbakır: [
      "Bağlar",
      "Bismil",
      "Çermik",
      "Çınar",
      "Çüngüş",
      "Dicle",
      "Eğil",
      "Ergani",
      "Hani",
      "Hazro",
      "Kayapınar",
      "Kocaköy",
      "Kulp",
      "Lice",
      "Silvan",
      "Sur",
      "Yenişehir",
    ],
    Edirne: [
      "Edirne",
      "Enez",
      "Havsa",
      "İpsala",
      "Keşan",
      "Lalapaşa",
      "Meriç",
      "Süloğlu",
      "Uzunköprü",
    ],
    Elazıg: [
      "Elazığ",
      "Ağın",
      "Alacakaya",
      "Arıcak",
      "Baskil",
      "Karakoçan",
      "Keban",
      "Kovancılar",
      "Maden",
      "Palu",
      "Sivrice",
    ],
    Erzincan: [
      "Çayırlı",
      "İliç",
      "Kemah",
      "Kemaliye",
      "Otlukbeli",
      "Refahiye",
      "Tercan",
      "Üzümlü",
    ],
    Erzurum: [
      "Aşkale",
      "Çat",
      "Hınıs",
      "Horasan",
      "İspir",
      "Karaçoban",
      "Karayazı",
      "Köprüköy",
      "Narman",
      "Oltu",
      "Olur",
      "Pasinler",
      "Pazaryolu",
      "Şenkaya",
      "Tekman",
      "Tortum",
      "Uzundere",
    ],
    Eskişehir: [
      "Alpu",
      "Beylikova",
      "Çifteler",
      "Günyüzü",
      "Han",
      "İnönü",
      "Mahmudiye",
      "Mihalgazi",
      "Mihalıççık",
      "Tepebaşı",
      "Sarıcakaya",
      "Seyitgazi",
      "Sivrihisar",
      "Odunpazarı",
    ],
    Gaziantep: [
      "Gaziantep",
      "Araban",
      "İslahiye",
      "Karkamış",
      "Nizip",
      "Oğuzeli",
      "Nurdağı",
      "Şahinbey",
      "Şehit Kamil",
      "Yavuzeli",
    ],
    Giresun: [
      "Piraziz",
      "Bulancak",
      "Giresun Merkez",
      "Keşap",
      "Espiye",
      "Tirebolu",
      "Görele",
      "Eynesil",
      "Alucra",
      "Çamoluk",
      "Çanakçı",
      "Dereli",
      "Doğankent",
      "Güce",
      "Şebinkarahisar",
      "Yağlıdere",
    ],
    Gumushane: ["Gümüşhane", "Kelkit", "Köse", "Kürtün", "Şiran", "Torul"],
    Hakkari: ["Hakkari", "Çukurca", "Derecik", "Şemdinli", "YüksekOva"],
    Hatay: [
      "Antakya",
      "Altınözü",
      "Arsuz",
      "Belen",
      "Defne",
      "Dörtyol",
      "Erzin",
      "Hassa",
      "İskenderun",
      "Kırıkhan",
      "Kumlu",
      "Payas",
      "Reyhanlı",
      "Samandağ",
      "Yayladağı",
    ],
    Isparta: [
      "Aksu",
      "Atabey",
      "Eğirdir",
      "Gelendost",
      "Gönen",
      "Keçiborlu",
      "Senirkent",
      "Sütçüler",
      "Şarkikaraağaç",
      "Uluborlu",
      "Yalvaç",
      "Yenişarbademli",
    ],
    Mersin: [
      "Akdeniz",
      "Anamur",
      "Aydıncık",
      "Bozyazı",
      "Çamlıyayla",
      "Erdemli",
      "Gülnar",
      "Mezitli",
      "Mut",
      "Silifke",
      "Tarsus",
      "Toroslar",
      "Yenişehir",
    ],
    Istanbul: [
      "Adalar",
      "Arnavutköy",
      "Ataşehir",
      "Avcılar",
      "Bağcılar",
      "Bahçelievler",
      "Bakırköy",
      "Başakşehir",
      "Bayrampaşa",
      "Beşiktaş",
      "Beykoz",
      "Beylikdüzü",
      "Beyoğlu",
      "Büyükçekmece",
      "Çatalca",
      "Çekmeköy",
      "Esenler",
      "Esenyurt",
      "Eyüpsultan",
      "Fatih",
      "Gaziosmanpaşa",
      "Güngören",
      "Kadıköy",
      "Kağıthane",
      "Kartal",
      "Küçükçekmece",
      "Maltepe",
      "Pendik",
      "Sancaktepe",
      "Sarıyer",
      "Silivri",
      "Sultanbeyli",
      "Sultangazi",
      "Şile",
      "Şişli",
      "Tuzla",
      "Ümraniye",
      "Üsküdar",
      "Zeytinburnu",
    ],
    Izmir: [
      "Aliağa",
      "Balçova",
      "Bayındır",
      "Bayraklı",
      "Bergama",
      "Beydağ",
      "Bornova",
      "Buca",
      "Çeşme",
      "Çiğli",
      "Dikili",
      "Foça",
      "Gaziemir",
      "Güzelbahçe",
      "Karabağlar",
      "Karaburun",
      "Karşıyaka",
      "Kemalpaşa",
      "Kınık",
      "Kiraz",
      "Konak",
      "Menderes",
      "Menemen",
      "Narlıdere",
      "Ödemiş",
      "Seferihisar",
      "Selçuk",
      "Tire",
      "Torbalı",
      "Urla",
    ],
    Kars: [
      "Merkez",
      "Akyaka",
      "Arpaçay",
      "Digor",
      "Kağızman",
      "Sarıkamış",
      "Selim",
      "Susuz",
    ],
    Kastamonu: [
      "Araç",
      "Azdavay",
      "Bozkurt",
      "Cide",
      "Çatalzeytin",
      "Daday",
      "Devrekani",
      "Doğanyurt",
      "Hanönü",
      "İhsangazi",
      "İnebolu",
      "Küre",
      "Pınarbaşı",
      "Şenpazar",
      "Seydiler",
      "Taşköprü",
      "Tosya",
    ],
    Kayseri: [
      "Merkez",
      "Akkışla",
      "Bünyan",
      "Develi",
      "Felahiye",
      "Hacılar",
      "İncesu",
      "Kocasinan",
      "Melikgazi",
      "Özvatan",
      "Pınarbaşı",
      "Sarıoğlan",
      "Sarız",
      "Talas",
      "Tomarza",
      "Yahyalı",
      "Yeşilhisar",
    ],
    Kırklareli: [
      "Merkez",
      "Babaeski",
      "Demirköy",
      "Kofçaz",
      "Lüleburgaz",
      "Pehlivanköy",
      "Pınarhisar",
      "Vize",
    ],
    Kırşehir: [
      "Merkez",
      "Akçakent",
      "Akpınar",
      "Boztepe",
      "Çiçekdağı",
      "Kaman",
      "Mucur",
    ],
    Kocaeli: [
      "Merkez",
      "Başiskele",
      "Çayırova",
      "Darıca",
      "Dilovası",
      "Gebze",
      "Gölcük",
      "İzmit",
      "Kandıra",
      "Karamürsel",
      "Kartepe",
      "Körfez",
    ],
    Konya: [
      "Merkez",
      "Ahırlı",
      "Akören",
      "Akşehir",
      "Altınekin",
      "Beyşehir",
      "Bozkır",
      "Cihanbeyli",
      "Çeltik",
      "Çumra",
      "Derbent",
      "Derebucak",
      "Doğanhisar",
      "Emirgazi",
      "Ereğli",
      "Güneysınır",
      "Hadim",
      "Halkapınar",
      "Hüyük",
      "Ilgın",
      "Kadınhanı",
      "Karapınar",
      "Karatay",
      "Kulu",
      "Meram",
      "Sarayönü",
      "Selçuklu",
      "Seydişehir",
      "Taşkent",
      "Tuzlukçu",
      "Yalıhüyük",
      "Yunak",
    ],
    Kütahya: [
      "Merkez",
      "Altıntaş",
      "Aslanapa",
      "Çavdarhisar",
      "Domaniç",
      "Dumlupınar",
      "Emet",
      "Gediz",
      "Hisarcık",
      "Pazarlar",
      "Şaphane",
      "Simav",
      "Tavşanlı",
    ],
    Malatya: [
      "Merkez",
      "Akçadağ",
      "Arapgir",
      "Arguvan",
      "Battalgazi",
      "Darende",
      "Doğanşehir",
      "Doğanyol",
      "Hekimhan",
      "Kale",
      "Kuluncak",
      "Pütürge",
      "Yazıhan",
      "Yeşilyurt",
    ],
    Manisa: [
      "Merkez",
      "Akhisar",
      "Alaşehir",
      "Demirci",
      "Gölmarmara",
      "Gördes",
      "Kırkağaç",
      "Köprübaşı",
      "Kula",
      "Salihli",
      "Sarıgöl",
      "Saruhanlı",
      "Selendi",
      "Soma",
      "Şehzadeler",
      "Turgutlu",
      "Yunusemre",
    ],
    Kahramanmaraş: [
      "Merkez",
      "Afşin",
      "Andırın",
      "Çağlayancerit",
      "Dulkadiroğlu",
      "Ekinözü",
      "Elbistan",
      "Göksun",
      "Nurhak",
      "Onikişubat",
      "Pazarcık",
      "Türkoğlu",
    ],
    Mardin: [
      "Merkez",
      "Dargeçit",
      "Derik",
      "Kızıltepe",
      "Mazıdağı",
      "Midyat",
      "Nusaybin",
      "Ömerli",
      "Savur",
      "Yeşilli",
    ],
    Mugla: [
      "Merkez",
      "Bodrum",
      "Dalaman",
      "Datça",
      "Fethiye",
      "Kavaklıdere",
      "Köyceğiz",
      "Marmaris",
      "Menteşe",
      "Milas",
      "Ortaca",
      "Seydikemer",
      "Ula",
      "Yatağan",
    ],
    Muş: ["Merkez", "Bulanık", "Hasköy", "Korkut", "Malazgirt", "Varto"],
    Nevşehir: [
      "Merkez",
      "Acıgöl",
      "Avanos",
      "Derinkuyu",
      "Gülşehir",
      "Hacıbektaş",
      "Kozaklı",
      "Ürgüp",
    ],
    Niğde: ["Merkez", "Bor", "Çamardı", "Çiftlik", "Ulukışla"],
    Ordu: [
      "Ordu Merkez",
      "Akkuş",
      "Altınordu",
      "Aybastı",
      "Çamaş",
      "Çatalpınar",
      "Çaybaşı",
      "Fatsa",
      "Gölköy",
      "Gülyalı",
      "Gürgentepe",
      "İkizce",
      "Kabadüz",
      "Kabataş",
      "Korgan",
      "Kumru",
      "Mesudiye",
      "Perşembe",
      "Ulubey",
      "Ünye",
    ],
  };

  interface Ilceler {
    [il: string]: string[];
  }

  const toggleIlList = () => {
    setIlListVisible(!ilListVisible);
  };

  const handleIlSelection = (selectedIl: string) => {
    setFormValues({ ...formValues, il: selectedIl, ilce: "" });
    setIlListVisible(false);

    // İlçe listesini güncelleme
    if (ilceler[selectedIl]) {
      setIlceListesi({ ...ilceListesi, [selectedIl]: ilceler[selectedIl] });
      setIlceListVisible(true);
    } else {
      // Eğer ilçe listesi boşsa veya tanımlı değilse, ilçe listesini gizle
      setIlceListVisible(false);
    }
  };

  const handleIlceSelection = (selectedIlce: string) => {
    setFormValues({ ...formValues, ilce: selectedIlce });
    setIlceListVisible(false);
  };
  return (
    <form className="menu">
      <div className="menu__title">{title}</div>
      <div className="menu__content">
        <div
          className={`menu__content-container ${
            inputErrors.subeAdi ? "error" : ""
          }`}
        >
          <input
            type="text"
            placeholder="Şube Adı"
            className="menu__content-container-input"
            value={formValues.subeAdi}
            onChange={(e) => handleInputChange("subeAdi", e.target.value)}
          />
          {inputErrors.subeAdi && (
            <div className="error-message">Bu alan boş bırakılamaz</div>
          )}
        </div>
        <InputMask
          mask="+99 999 999 99 99"
          placeholder="Telefon numarası"
          className={`menu__input ${inputErrors.subeAdi ? "error" : ""}`}
          value={formValues.telefon}
          onChange={(e) => handleInputChange("telefon", e.target.value)}
        />
        {/* <PhoneInput /> */}
        <div
          className={`menu__content-container ${inputErrors.ad ? "error" : ""}`}
        >
          <input
            type="text"
            placeholder="Adı"
            className="menu__content-container-input"
            value={formValues.ad}
            onChange={(e) => handleInputChange("ad", e.target.value)}
          />
          {inputErrors.ad && (
            <div className="error-message">Bu alan boş bırakılamaz</div>
          )}
        </div>
        <div
          className={`menu__content-container ${
            inputErrors.soyad ? "error" : ""
          }`}
        >
          <input
            type="text"
            placeholder="Soyadı"
            className="menu__content-container-input"
            value={formValues.soyad}
            onChange={(e) => handleInputChange("soyad", e.target.value)}
          />
          {inputErrors.soyad && (
            <div className="error-message">Bu alan boş bırakılamaz</div>
          )}
        </div>
        <div
          className={`menu__content-container ${inputErrors.il ? "error" : ""}`}
        >
          <input
            type="text"
            placeholder="İl"
            className="menu__content-container-input"
            value={formValues.il}
            onClick={toggleIlList}
            onChange={(e) => handleInputChange("il", e.target.value)}
          />
          {ilListVisible && (
            <div className="il-listesi">
              {iller.map((il) => (
                <div key={il} onClick={() => handleIlSelection(il)}>
                  {il}
                </div>
              ))}
            </div>
          )}
          {inputErrors.il && (
            <div className="error-message">Bu alan boş bırakılamaz</div>
          )}
        </div>
        <div
          className={`menu__content-container ${
            inputErrors.ilce ? "error" : ""
          }`}
        >
          <input
            type="text"
            placeholder="Adı"
            className="menu__content-container-input"
            value={formValues.ilce}
            onChange={(e) => handleInputChange("ilce", e.target.value)}
            onClick={() => setIlceListVisible(true)}
          />
          {ilceListVisible && (
            <div className="ilce-listesi">
              {ilceListesi[formValues.il]?.map((ilce) => (
                <div key={ilce} onClick={() => handleIlceSelection(ilce)}>
                  {ilce}
                </div>
              ))}
            </div>
          )}
          {inputErrors.ilce && (
            <div className="error-message">Bu alan boş bırakılamaz</div>
          )}
        </div>
      </div>
      <div className={`menu__address ${inputErrors.adres ? "error" : ""}`}>
        <input
          type="text"
          placeholder="Adres Satırı (sokak,cadde ve diğer bilgileri giriniz.)"
          className={`menu__input menu__address-input ${
            inputErrors.subeAdi ? "error" : ""
          }`}
          value={formValues.adres}
          onChange={(e) => handleInputChange("adres", e.target.value)}
        />
        {inputErrors.adres && (
          <div className="error-message">Bu alan boş bırakılamaz</div>
        )}
      </div>
      <div className="menu__checkboxes">
        <label>
          <input
            type="checkbox"
            checked={formValues.varsayilanAdres}
            onChange={handleCheckbox1Change}
          />
          Varsayılan adres olarak belirle.
        </label>
        <label>
          <input
            type="checkbox"
            checked={formValues.faturaAdresi}
            onChange={handleCheckbox2Change}
          />
          Bu teslimat adresim fatura adresi olarak da kullanılsın.
          {formValues.faturaAdresi && (
            <div className="menu__checkboxes-buttons">
              <label>
                <input
                  type="radio"
                  name="faturaRadio"
                  value="faturaAdresi"
                  defaultChecked
                />
                Bireysel
              </label>
              <label>
                <input type="radio" name="faturaRadio" value="faturaAdresi2" />
                Kurumsal
              </label>
              <div>
                <input
                  type="text"
                  placeholder="TCKN"
                  value={formValues.tckn}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    if (/^\d*$/.test(inputValue) && inputValue.length <= 11) {
                      setFormValues((prevValues) => ({
                        ...prevValues,
                        tckn: inputValue,
                      }));
                    }
                  }}
                />
                {formValues.tckn.length > 0 &&
                  !/^\d*$/.test(formValues.tckn) && (
                    <div className="error-message">
                      TCKN sadece rakam içermelidir.
                    </div>
                  )}
                {formValues.tckn.length !== 11 && (
                  <div className="error-message">TCKN 11 haneli olmalıdır.</div>
                )}
              </div>
            </div>
          )}
        </label>
      </div>

      <div className="menu__button">
        <input type="button" value="Vazgeç" className="menu__button-input" />
        <input
          type="button"
          value="Kaydet"
          className="menu__button-input"
          onClick={handleSave}
        />
      </div>
    </form>
  );
};

export default Index;
