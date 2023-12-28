import { questionSchema } from './models/schemas/QuestionSchema'

const questions: questionSchema[] = [
   {
      id: 1,
      text: 'Vad är ditt nuvarande civilstånd?',
      categoryId: 1,
   },
   {
      id: 2,
      text: 'Har du några barn?',
      categoryId: 1,
   },
   {
      id: 3,
      text: 'Bor några barn hos dig?',
      categoryId: 1,
   },
   {
      id: 4,
      text: 'Vilken utbildning har du avslutat?',
      categoryId: 1,
   },
   {
      id: 5,
      text: 'Hur ser din arbetssituation ut?',
      categoryId: 1,
   },
   {
      id: 6,
      text: 'Har något av följande hänt dig under det senaste året? (Räkna från dagens datum). Har du under det senaste året upplevt: (Upprepa ofta)?',
      categoryId: 1,
   },
   {
      id: 7,
      text: 'Nu ska jag fråga dig om några känslor. Har du under de senaste två veckorna besvärats av något av detta?',
      categoryId: 1,
   },
   {
      id: 8,
      text: 'Har du någonsin varit med om, eller varit vittne till, eller varit tvungen att hantera en extremt traumatisk händelse som inneburit dödsfall, dödshot, allvarlig skada eller sexuellt våld mot dig eller någon annan? Om ja: Har du under den senaste månaden upplevt något av följande?',
      categoryId: 1,
   },
   {
      id: 9,
      text: `Har du någonsin haft en tvåveckorsperiod när du, så gott som dagligen upplevt något av nedanstående:  OBS! Positiv depressionsscreening kräver "ja" på en av de två första frågorna + ytterligare fyra "ja svar.`,
      categoryId: 1,
   },
   {
      id: 10,
      text: 'Hur mycket cola, kaffe, te eller energidrycker dricker du ungefär per dag?',
      categoryId: 1,
   },
   {
      id: 11,
      text: 'Har du någon gång rökt eller snusat dagligen?',
      categoryId: 1,
   },
   { id: 12, text: 'Hur mycket röker eller snusar du idag?', categoryId: 1 },
   {
      id: 13,
      text: 'Har du någon gång försökt sluta eller minska din konsumtion?',
      categoryId: 1,
   },
   {
      id: 14,
      text: 'Har något av följande hänt dig under det senaste året? (Räknat från dagens datum)? Har du under det senaste året: (Upprepa ofta)?',
      categoryId: 1,
   },
   { id: 15, text: 'Spelar du om pengar?', categoryId: 1 },
   {
      id: 16,
      text: 'Har du under de senaste 12 månaderna? (Upprepa ofta)?',
      categoryId: 1,
   },
   { id: 17, text: '* Hur ofta dricker du alkohol? ', categoryId: 1 },
   {
      id: 18,
      text: '* När du dricker, hur mycket dricker du då vanligen?',
      categoryId: 1,
   },
   { id: 19, text: 'När drack du alkohol första gången?', categoryId: 1 },
   { id: 20, text: 'När drack du alkohol senast?', categoryId: 1 },
   {
      id: 21,
      text: 'Hur mycket drack du första gången du blev ordentligt berusad?',
      categoryId: 1,
   },
   {
      id: 22,
      text: 'Hur mycket behöver du dricka idag för att bli ordentligt berusad?',
      categoryId: 1,
   },
   { id: 23, text: 'När var du ordentligt berusad senast?', categoryId: 1 },
   {
      id: 24,
      text: '* Har du någonsin druckit en helflaska sprit under en dag? (Alt. Män: 3 flaskor vin, 12 burkar starköl/cider. Kvinnor: 2 flaskor vin, 8 starköl/cider eller 50 cl. sprit).',
      categoryId: 1,
   },
   {
      id: 25,
      text: 'Har du någonsin använt någon av dessa läkemedel/droger?',
      categoryId: 1,
   },
   {
      id: 26,
      text: '*Hur ofta har du använt ____ under det senaste året?',
      categoryId: 1,
   },
   { id: 27, text: 'När använde du ____ senast?', categoryId: 1 },
   {
      id: 28,
      text: 'Har du upplevt att ____ har en berusningseffekt?',
      categoryId: 1,
   },
   {
      id: 29,
      text: 'Har du tagit ____ för att uppnå denna effekt?',
      categoryId: 1,
   },
   {
      id: 30,
      text: 'Har du injicerat en drog för att bli påverkad?',
      categoryId: 1,
   },
   { id: 31, text: 'Har du någonsin överdoserat en drog?', categoryId: 1 },
   {
      id: 32,
      text: 'Har någon/några överdoser krävt läkarvård?',
      categoryId: 1,
   },
   {
      id: 33,
      text: 'Har du någonsin använt ____ för att lindra nedstämdhet, ilska, apati eller andra obehagliga känslor?',
      categoryId: 1,
   },
   {
      id: 34,
      text: '* Har det hänt, vid mer än ett tillfälle, att du har använt mer ____ än du tänkt dig eller mer än föreskrivet?',
      categoryId: 1,
   },
   {
      id: 35,
      text: '* Har det hänt, vid mer än ett tillfälle, att du har fortsatt att använda ____ under längre tid än du hade tänkt dig?',
      categoryId: 1,
   },
   {
      id: 36,
      text: '* Har du någonsin använt ____ minst ett par dagar i sträck, utan att nyktra/klarna till?',
      categoryId: 1,
   },
   {
      id: 37,
      text: '* Har du märkt att du måste använda mer ____ (eller starkare doser) idag för att få samma effekt som när du började?',
      categoryId: 1,
   },
   {
      id: 38,
      text: '* Har det hänt, vid mer än ett tillfälle, att du inte kunnat komma ihåg vad du sagt eller gjort när du använt ____?',
      categoryId: 1,
   },
   {
      id: 39,
      text: 'Vet du att minnesluckor är ett tecken på en allvarlig påverkan av hjärnan?',
      categoryId: 1,
   },
   {
      id: 40,
      text: '* Har du fortsatt uppleva minnesluckor efter att du fått klart för dig att det är ett tecken på en allvarlig påverkan av hjärnan?',
      categoryId: 1,
   },
   {
      id: 41,
      text: '* Har det hänt att du ofta tänker på användning av ____ när du håller på med andra saker?',
      categoryId: 1,
   },
   {
      id: 42,
      text: '* HHar du någonsin sett till att ____ alltid finns tillgängligt för eget bruk?',
      categoryId: 1,
   },
   {
      id: 43,
      text: '* Har längtan/suget efter ____ någonsin varit så stark att du inte kunnat stå emot?',
      categoryId: 1,
   },
   {
      id: 44,
      text: '* Har du, vid mer än ett tillfälle, satt upp regler för att begränsa ditt bruk av ____ som du inte kunnat följa?',
      categoryId: 1,
   },
   {
      id: 45,
      text: '* Har du någonsin velat minska eller sluta med ____, men inte kunnat?',
      categoryId: 1,
   },
   {
      id: 46,
      text: '* Har du minskat eller gett upp sociala- eller fritidsaktiviteter för att kunna använda ____?',
      categoryId: 1,
   },
   {
      id: 47,
      text: '* Har det hänt, vid mer än ett tillfälle, att du inte kunnat göra det du planerat pga återhämtning från eller användning av ____?',
      categoryId: 1,
   },
   {
      id: 48,
      text: '* Har du varit borta från arbetet eller skolan pga ____?',
      categoryId: 1,
   },
   {
      id: 49,
      text: '* Har du försvårat dina möjligheter att utvecklas i arbetet, försummat eller slutat arbeta pga ____?',
      categoryId: 1,
   },
   {
      id: 50,
      text: '* Har du, vid mer än ett tillfälle, använt en stor del av dagen för att inta eller för att återhämta dig ifrån ____?',
      categoryId: 1,
   },
   {
      id: 51,
      text: '* Har du känt det som att livet kretsar runt ____?',
      categoryId: 1,
   },
   {
      id: 52,
      text: '* Har du haft problem med minnet eller koncentrationen som du eller någon annan tror beror på din användning av ____ ? (ej minnesluckor)',
      categoryId: 1,
   },
   {
      id: 53,
      text: '* Har du haft känslomässiga problem (t ex känt dig nedstämd, värdelös, överdrivet misstänksam eller haft ångest) som du eller någon annan tror beror på ditt bruk av ____?',
      categoryId: 1,
   },
   {
      id: 54,
      text: 'Har din familj, dina vänner eller någon annan, vid mer än ett tillfälle, klagat på ditt bruk av ____?',
      categoryId: 1,
   },
   {
      id: 55,
      text: 'Har din användning av ____ någonsin skadat en relation till någon som du brydde dig om?',
      categoryId: 1,
   },
   {
      id: 56,
      text: 'Har du någonsin slagit någon eller blivit våldsam när du använt ____?',
      categoryId: 1,
   },
   {
      id: 57,
      text: 'Har du någonsin haft konflikter med en chef, kollegor/lärare eller klasskamrater pga ditt bruk av ____?',
      categoryId: 1,
   },
   {
      id: 58,
      text: 'Har du, vid mer än ett tillfälle, struntat i överenskommelser eller i vardagliga sysslor pga din användning av ____?',
      categoryId: 1,
   },
   {
      id: 59,
      text: 'Har det hänt att du inte betalat räkningar eller skött dina andra ekonomiska förpliktelser pga att du använt pengarna till ____?',
      categoryId: 1,
   },
   {
      id: 60,
      text: 'Har du haft svårigheter att utföra ditt jobb eller skolarbete pga ____?',
      categoryId: 1,
   },
   {
      id: 61,
      text: 'Har du någonsin blivit omplacerad, avskedad eller avstängd från ditt arbete/skola pga ditt bruk av ____?',
      categoryId: 1,
   },
   {
      id: 62,
      text: 'Har du blivit omhändertagen av polisen pga ditt beteende i samband med användning av ____? (T ex. LOB, ringa narkotikabrott eller skadegörelse under påverkan) Ej trafikbrott',
      categoryId: 1,
   },
   {
      id: 63,
      text: 'Har du någonsin blivit gripen för ett brott, som hängde samman med att du skulle få tag på eller finansiera ditt bruk av ____?',
      categoryId: 1,
   },
   {
      id: 64,
      text: 'Har du någonsin blivit tagen av polisen pga att du kört påverkad av ____? (Vid ja-svar, fråga vilken veckodag, tid på dagen och hur de kände sig)',
      categoryId: 1,
   },
   {
      id: 65,
      text: 'Har du kört påverkad av ____ utan att åka fast?',
      categoryId: 1,
   },
   {
      id: 66,
      text: 'Har du någonsin, som förare av ett motordrivet fordon, varit inblandad i en olycka när du använt ____?',
      categoryId: 1,
   },
   {
      id: 67,
      text: 'Har du någonsin skadat dig när du använt ____, så att du behövt medicinsk vård?',
      categoryId: 1,
   },
   {
      id: 68,
      text: 'Har det hänt, när du använt ____, att du har sexuellt utnyttjat/eller utsatt någon för sexuellt våld?',
      categoryId: 1,
   },
   {
      id: 69,
      text: 'Har du vid mer än ett tillfälle, utsatt dig för risker, av vilken typ som helst, när du har använt ____?',
      categoryId: 1,
   },
   {
      id: 70,
      text: '(Endast kvinnor). Har du använt ____ i större mängder än du tyckte du borde, fast du visste att du var gravid? OBS! Koda alltid Nej för män.',
      categoryId: 1,
   },
   {
      id: 71,
      text: '* Har du haft medicinska problem som du eller någon annan tror beror på ditt bruk av ____?',
      categoryId: 1,
   },
   {
      id: 72,
      text: '* Har du fortsatt använda ____, fast du visste att det kunde förvärra ett fysiskt/psykiskt problem t ex magsår, depression?',
      categoryId: 1,
   },
   {
      id: 73,
      text: '*  Har du dragit dig undan familj/nära vänner för att istället kunna använda ____ antingen ensam eller med andra?',
      categoryId: 1,
   },
   {
      id: 74,
      text: '* Har du någonsin känt minst två av följande när du minskade eller slutade använda ____?',
      categoryId: 1,
   },
   {
      id: 75,
      text: '* Har du haft påtagliga skakningar efter att du slutat med/minskat användningen av ____?',
      categoryId: 1,
   },
   {
      id: 76,
      text: '* Har du använt ____ eller likartad drog för att lindra eller undvika skakningar eller andra abstinensbesvär?',
      categoryId: 1,
   },
   {
      id: 77,
      text: '* Har du drabbats av hallucinationer eller allvarlig förvirring efter att du slutat eller trappat ned på ____?',
      categoryId: 1,
   },
   {
      id: 78,
      text: 'Har du genomgått någon behandling (inkl medicinsk) för alkohol, läkemedel eller andra droger?',
      categoryId: 1,
   },
   {
      id: 79,
      text: 'Om du genomgått någon behandling för alkohol, läkemedel eller andra droger, när och var genomfördes denna?',
      categoryId: 1,
   },
   {
      id: 80,
      text: 'Nuvarande vistelse?',
      categoryId: 1,
   },
   {
      id: 81,
      text: 'Har du någon förstagradssläkting (föräldrar, barn och syskon), eller andragradssläkting (far- och morföräldrar, barnbarn) som har eller haft problem med alkohol, läkemedel eller andra droger?',
      categoryId: 1,
   },
   {
      id: 82,
      text: 'Tillåter du att intervjuns avidentifierade uppgifter får användas i framtida forskning?',
      categoryId: 1,
   },
]

export default questions
