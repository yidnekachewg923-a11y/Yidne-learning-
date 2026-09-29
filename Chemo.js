function C10(){
  document.body.innerHTML=`
  <button onclick="backHome()">Back</button>
  <div id="Cu">
          <h1>Welcome to Chemistry</h1>
          <p>choose the unit</p>
          <button onclick="Cunit1()">Unit One</button>
          <button onclick="Cunit2()">Unit Two</button>
          <button onclick="Cunit3()">Unit Three</button>
          <button onclick="Cunit4()">Unit Four</button>
          <button onclick="Cunit5()">Unit Five</button>
          <button onclick="Cunit6()">Unit Six</button>
          </div>
  `;
}
function Cunit1(){
  document.body.innerHTML=`
    <button onclick="C10()">Back</button>
  <h1>Unit One</h1>
  <h2>Chemical reaction and Stoichiometry</h2>
  <p><b>Physical change</b> is a change that does not involve the formation of a new substance with new chemical composition</p>
  <p>አካላዊ ለውጥ(Physical Change)— ትርጉም፦
አካላዊ ለውጥ ማለት አዲስ ንጥረ ነገር ሳይፈጠር፣ የነገሩ ቅርጽ፣ መጠን ወይም የአካል ሁኔታ የሚለወጥበት ሂደት ነው።
ምሳሌ፦ በረዶ ወደ ውሃ መቀየር።.</p>
<p>Ayek beredo mejemeryam wuha neber keza sikeyerm wuha nw mnm wohanetun alekekem sizu tekeyere enji beredom yeteserahu ke H2O nw wode liquid sikeyerem H2O nw</p>
<p><b>A chemical change</b> is a change in which one or more new substances are formed with different properties from the original substance.</p>
<p><b>Example</b></p>
<ul>
<li>Burning wood</li>
<li>Cooking Food</li>
<li>burning paper</li>
</ul>
<p>Chemical change = ኬሚካላዊ ለውጥ - ኬሚካላዊ ለውጥ ማለት አዲስ ንጥረ ነገር የሚፈጠርበት ለውጥ ነው።</p>
<p><b>Example</b></p>
<ul>
<li>Burning wood -እንጨት መቃጠል 🔥Sinakatil Inchetu sikatel C2O Eyetekeyere nw mihedewu wode ጭስ Silez addis neger nw mifeterwu</li>
<li>Cooking Food </li>
<li>burning(maqaxel) paper Woreqet Makatel</li>
</ul>
<p>When happen <b>Chemical change</b> this things will happen:-</p>
<p>1. <b>Formation of nw substance</b> 👈 yhin kal endatresa Chemical change sinor</p>
<p>2. Production of heat or light</p>
<p>3. Change of color</p>
<p>4. Change in temperature</p>
<p> ☝️☝️ kelay yetetsafu negeroch chemical change sikahed yemifeter neger nw shamdid</p>
<p><b>Chemical reaction</b> is the process converting reactants in to New products called Product</p>
<p>Chemical reaction = ኬሚካላዊ ምላሽ - ኬሚካላዊ ምላሽ ማለት አንድ ወይም ከዚያ በላይ ንጥረ ነገሮች በመለወጥ አዲስ ንጥረ ነገር የሚፈጠርበት ሂደት ነው።<br>
ምሳሌ፦ እንጨት ሲቃጠል አመድ፣ ጋዝ እና ሌሎች አዳዲስ ንጥረ ነገሮች ይፈጠራሉ።</p>
<p><b>Example:</b> S + O ---> SO<sub>2</sub></p>
<p>Ayek sulphur ke oxygen gar react siyareg adis Sulphur dioxide mibal neger tefetere</p>
<p>The quantitative study of reactants and products in chemical reaction is called <b>Stoichiometry</b></p>
<p>በቀላሉ: በChemical reaction Wusix ምን ያህል reactant እንደሚያስፈልግ እና ምን ያህል product እንደሚፈጠር ማስላት ነው።</p>
<h2>Chemical Equations</h2>
<p>A chemical equation represents a chemical reaction using chemical formulas and symbols.</p>
<p>Chemical equation sitsafi hule be gira bekul reactant ale keza esu wode adis wode product mibal neger ykeyeral</p>
<p>Example</p>
<p> Hydrogen react with oxygen</p>
<p>Ahun chemical equation linitsif nw Bedenb teketatel</p>
<p>Eshi ye hydrogen symbol Yehe <b>H</b><sub>2</sub></b> nw ye oxygen <b>O</b><sub>2</sub></p>
<p>H<sub>2</sub> + O<sub>2</sub> ---> H<sub>2</sub>O</p>
<p>ke arrow bestegra yalewu huletum reactant nachewu ke arrow beste kegn bekul yalewu demo demo product nw mibalewu</p>
<p>Ena ahun example kayek oxygen be reactant bekul yalewu 2 nw begra bekul demo 1 nw silez balance mareg yasfelgal endet </p>
<p>Balance Enarg</p>
<p>H<sub>2</sub> + O<sub>2</sub> ---> 2H<sub>2</sub>O</p>
<p>Balance sinareg ketach antsifim ke filefit nw mintsifewu ena ahun Oxygen balance hone neger gn Hydrogen ahun balance alhonem be reactant bekul hydrogen 2 nw be product bekul demo 4 hone mikinyatum ye chemernewu 2 hulunim nw miyabazawu</p>
<p>Eshi ahun oxygen balance honoal ketay hydrogen balance enarg lemareg min mareg alebn betam kelal nw est ante mokr melsun satay satmokr show answer endatnek</p>
<button onclick="showanswer()">Show Answer</button>
<p id="answer"></p>
<p><b>Example: The word equation for the reaction between hydrogen and nitrogen to produce Ammonia</b></p>
<p>First Man nw reactant ena man nw products milewun meleyet</p>
<p>The reaction between hydrogen and nitrogen ylal haa tiyakew silez reactantochu Hydrogen ena nitrogen nachew Produce ylal haa silez productu Ammonia nw</p>
<p>Ahun enesun be symbol metsaf</p>
<p>H<sub>2</sub> + N<sub>2</sub> ---> NH<sub>3</sub>(ammonia)</p>
<p>Ahun demo hulum balance alhonum</p>
<p>Est mejemerya Nitrogen balance enarg</p>
<p>Nitrogen balance lemareg mn enarg be product side Nitrogen 1 nw be reactant side 2 nw balance le mareg be reactant side liy 2 mechemer nw </p>
<p>H<sub>2</sub> + 2N<sub>2</sub> ---> 2NH<sub>3</sub>
<p>Ahun nitrogen balance honoal gn hydrogen ahun balance alhonem</p>
<p>Hydrogen be reactant side 2 nw be product side ahun 6 nw esun endet balance enarg show answer satneka berasik mokir</p>
<button onclick="hydro()">Show Answer</button>
<p id="asn"></p>
<button onclick="pt()">Next part</button>

  
  `;
}
function showanswer(){
  document.getElementById("answer").innerHTML="2H<sub>2</sub> + O<sub>2</sub> ---> 2H<sub>2</sub>O 👈 reactant hydrogen lay kefileft 2 mechemr bicha keza eyi hulum balance honewal";
  
}
function hydro(){
  document.getElementById("asn").innerHTML="3H<sub>2</sub> + N<sub>2</sub> ---> 2NH<sub>3</sub> 👈 reactant hydrogen lay kefileft 3 mechemr bicha keza eyi hulum balance honewal";
  
}
function pt(){
  document.body.innerHTML=`
    <button onclick="Cunit1()">Back</button>
  <img id="pt" src="pt.png">
  <h2>## Balancing Chemical Equations</h2>
  <h3>Be hulet menged nw Chemical Equation balance Minaregewu</h3>
  <p>1. Balancing Chemical equations By LCM method</p>
  <p>2. Balancing Chemical Equations by Using Algebraic Method</p>
   <p>1. <b>Balancing Chemical equations By LCM method</b></p>
   <p><b>Example: when aluminum react with Oxygen , aluminum oxide formed (yfeteral). write the balanced chemical equation for the reaction</b></p>
   <p>Megerya man nw reactants man nw products esun lay mejemerya endatresa</p>
   <p> Reactants aluminum ena oxygen nachewu</p>
   <p> Products Aluminum oxide nw</p>
   <p>Step 2: <b>Al + O<sub>2</sub> ---> Al<sub>2</sub>O<sub>3</sub></b></p>
   <p> 👉 <b>Al<sub>2</sub>O<sub>3</sub> Formula ket meta 🤔</b></p>
   <p><b>Al</b> Valance electron sint nw</p>
   <p>Esun matak kehone Al atomic number sint nw kelay period table lay</p>
   <p> 13 nw keza endet nw valance electron minagegnewu</p>
   <p> 13= 2,8,3 yhich yemechreshawa 3 nat valance electron mitbalewu</p>
   <p>Eshi ahun demo oxygen ga enhid atomic number 8 nw</p>
   <p> 8=2,6 <b>ahun ez ga bedenb teketatilegn</b></p>
   <p>And element stable woym mnm lela electron ayasifelgewum mibalewu ye mechereshawu electron 8 sihon bicha nw</p>
   <p>Ena manignawm element stable woym 8 memulat yfelgal</p>
   <p>Ena ahun oxygen kayek ye mechereshawu 6 nw 8 almolam silez oxygen lememulat 6 bisex nw mishalewu woys 2 bikebel yshalal 2 bikebel haa sileza ye oxygen valance numberu 2 nw mihonewu</p>
   <p>Al lmn eshi 3 hone 5 eyegodelewu litl tichlalek Est aluminum sosit biset yshalal woys 5 bikebel yshalal 3 biset haa sileza nw 3 yehonewu </p>
   <h2>Ahun wode formula enimelesi</h2>
   <p>Silez kelay leyandadachewu valance electron titsifalek keza crisscross mareg nw</p>
   <h3>Valance electron(woym and ande Valance number ybalal) Endet endemifeleg Eny</h3>
   <p>2,8,16,32...</p>
   <p>Eyale nw mihedewu ena hule miminesawu ke 2 nw keza 8 keza 16 keza 32 keza 64...Eyale yhedal</p>
   <p>Valance number minagegnewu ke atomic number nw</p>
   <table border="1">

<tr>
  <th>No.</th>
  <th>Element</th>
  <th>Symbol</th>
  <th>Electron Configuration</th>
</tr>

<tr>
  <td>1</td>
  <td>Hydrogen</td>
  <td>H</td>
  <td>1</td>
</tr>

<tr>
  <td>2</td>
  <td>Helium</td>
  <td>He</td>
  <td>2</td>
</tr>

<tr>
  <td>3</td>
  <td>Lithium</td>
  <td>Li</td>
  <td>2, 1</td>
</tr>

<tr>
  <td>4</td>
  <td>Beryllium</td>
  <td>Be</td>
  <td>2, 2</td>
</tr>

<tr>
  <td>5</td>
  <td>Boron</td>
  <td>B</td>
  <td>2, 3</td>
</tr>

<tr>
  <td>6</td>
  <td>Carbon</td>
  <td>C</td>
  <td>2, 4</td>
</tr>

<tr>
  <td>7</td>
  <td>Nitrogen</td>
  <td>N</td>
  <td>2, 5</td>
</tr>

<tr>
  <td>8</td>
  <td>Oxygen</td>
  <td>O</td>
  <td>2, 6</td>
</tr>

<tr>
  <td>9</td>
  <td>Fluorine</td>
  <td>F</td>
  <td>2, 7</td>
</tr>

<tr>
  <td>10</td>
  <td>Neon</td>
  <td>Ne</td>
  <td>2, 8</td>
</tr>

<tr>
  <td>11</td>
  <td>Sodium</td>
  <td>Na</td>
  <td>2, 8, 1</td>
</tr>

<tr>
  <td>12</td>
  <td>Magnesium</td>
  <td>Mg</td>
  <td>2, 8, 2</td>
</tr>

<tr>
  <td>13</td>
  <td>Aluminium</td>
  <td>Al</td>
  <td>2, 8, 3</td>
</tr>

<tr>
  <td>14</td>
  <td>Silicon</td>
  <td>Si</td>
  <td>2, 8, 4</td>
</tr>

<tr>
  <td>15</td>
  <td>Phosphorus</td>
  <td>P</td>
  <td>2, 8, 5</td>
</tr>

<tr>
  <td>16</td>
  <td>Sulfur</td>
  <td>S</td>
  <td>2, 8, 6</td>
</tr>

<tr>
  <td>17</td>
  <td>Chlorine</td>
  <td>Cl</td>
  <td>2, 8, 7</td>
</tr>

<tr>
  <td>18</td>
  <td>Argon</td>
  <td>Ar</td>
  <td>2, 8, 8</td>
</tr>

<tr>
  <td>19</td>
  <td>Potassium</td>
  <td>K</td>
  <td>2, 8, 8, 1</td>
</tr>

<tr>
  <td>20</td>
  <td>Calcium</td>
  <td>Ca</td>
  <td>2, 8, 8, 2</td>
</tr>

</table>
</h1>Est Balance Chemical equation wuth LCM Method Eny</h1>
<p>When Aluminum react with oxygen it formed Aluminum oxide</p>
<p>Al + O<sub>2</sub> ---> Al<sub>2</sub>O<sub>3</sub></p>
<p>Next step yeyandadun valance electron enfelgalen</p>
<p>Ahun Examples lay yaalu elementoch Al ena O nachew silez yehuletun valance electron mawok bicha nw</p>
<p>Al=3<br>O=2</p>
<p>Next step Ahun bedenb teketatel</p>
<p>Al be react bekul and bicha nw oxygen demo 2 nw eneza ketach mitsafu kutiroch subscript nw mibalut</p>
<p>Al be product bekul 2 nw oxygen demo 3</p>
<p>Ahun kezi bemeketel Valance electron be subscript enabazalen</p>
<p>Reactant: Al=3*1, O=2*2 Al=3, O=4</p>
<p>Product: Al=3*2 , O=2*3 Al=6 O=6</p>
<p>Ahun Ye hulum LCM(tinshu ye gara akafay) enflgalen</p>
<p>LCM(Al=3,O=4,Al=6,O=6) =12 Nw</p>
<p>Keza yagegnenewun LCM lehulem Eyakafilen yagegnenewun kutir le original formula fitleft enasikemitalen</p>
<p>Orginal formula</p>
<p>Al + O<sub>2</sub> ---> Al<sub>2</sub>O<sub>3</sub></p>
<p>Silez ahun ye reactant part ensira</p>
<p>ye Al 12/3=4 ye O 12/4=3</p>
<p>4Al + 3O ---> Al<sub>2</sub>O<sub>3</sub></p>
<p>Ahun ye product part ensira</p>
<p>Ye Al 12/6=2 ye O 12/6=2</p>
<p>4Al + 3O ---> 2Al<sub>2</sub>O<sub>3</sub></p>
<p>Est ahun demo be algebraic method enisira</p>
<p><b>Example:Balance the following chemical equation , using the algebraic Method </b></p>
<p><b>a.Na + H<sub>2</sub>O ---> NaOH + H<sub>2</sub></b></p>
<p><b>b.KClO<sub>3</sub> ---> KCl + O<sub>2</sub></b></p>
<p><b>c.H<sub>2</sub>O<sub>2</sub>  ---> H<sub>2</sub>O + O<sub>2</sub></b></p>
<p><b>d.Al + H<sub>3</sub>PO<sub>4</sub> ---> AlPO<sub>2</sub> + H<sub>2</sub></b></p>
<p>1.Solution</p>
<p>Eshi a,b,c,d Enibel kelay ene silemaymechegn nw</p>
<p>Na(a = c)<br>H(2b = c + 2d)<br>O(b = c)</p>
<p>Let c = 1<br>a = 1<br> b = 1 Eshi ahun d bicha mikeren</p>
<p>2b=c+2d<br>2(1)=1+2d<br>2-1=2d<br>1=2d<br>1/2=2d/2<br>1/2=d<br>d=1/2</p>
<p>d Fraction silehone hulunm be 2 enabaza</p>
<p>a=2<br>b=2<br>c=2<br>d=1</p>
<p><b>a.2Na + 2H<sub>2</sub>O ---> 2NaOH + H<sub>2</sub>(balanced</b></p>
<p>2.solution</p>
<p>Ante a,b,c bilek seymi</p>
<p>K(a=b)<br>Cl(a=b)<br>O(3a=2c)</p>
<p>a=b<br>a=b<br>3a=2c</p>
<p>let b=1<br>a=1</p>
<p>Ahun c bicha nw mikeren</p>
<p>3a=2c 3(1)=2c 3=2c 3/2=2c/2 c=3/2</p>
<p>a=1 , b=1, c=3/2 silet c fraction silehone hulunm be 2 mabazat</p>
<p>a=2, b=2, c=3</p>
<p><b>2KClO<sub>3</sub> ---> 2KCl + 3O<sub>2</sub>(balanced)</b></p>
<p>3.solution</p>
<p>Eshi ante a,b,c bilek seyim</p>
<p>H(2a=2b)<br>O(2a=b+2c)</p>
<p>2a=2b<br>2a=b+2c</p>
<p>let b=1<br>2a=2(1)<br>2a=2<br>2a/2=2/2<br>a=1</p>
<p>Eshi ahun c bicha nw mikeren</p>
<p>2a=b+2c<br>2(1)=1+2c<br>2=1+2c<br>2-1=2c<br>1=2c</br>1/2=2c/2<br>c=1/2</p>
<p>a=1, b=1, c=1/2<p>
<p>Eshi ahun c fraction silehone be 2 enabazalen</p>
<p>a=2, b=2, c=1</p>
<p><b>2H<sub>2</sub>O<sub>2</sub>  ---> 2H<sub>2</sub>O + O<sub>2</sub>(balanced)</b></p>
<h4>d ante mokir Check lemareg ketach</h4>
<button onclick="balance()">Answer</button>
<p id="in"></p>
<h2>Balance the following equations using the algebraic method.</h2>

<p><b>a.</b> PCl<sub>5</sub> + H<sub>2</sub>O &rarr; H<sub>3</sub>PO<sub>4</sub> + HCl</p>

<p><b>b.</b> Mg + H<sub>2</sub>O &rarr; Mg(OH)<sub>2</sub> + H<sub>2</sub></p>

<p><b>c.</b> Zn(NO<sub>3</sub>)<sub>2</sub> &rarr; ZnO + NO<sub>2</sub> + O<sub>2</sub></p>

<p><b>d.</b> H<sub>2</sub>SO<sub>4</sub> + NaOH &rarr; Na<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O</p>

<p><b>e.</b> NH<sub>3</sub> + O<sub>2</sub> &rarr; NO + H<sub>2</sub>O</p>

<p><b>f.</b> C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + O<sub>2</sub> &rarr; CO<sub>2</sub> + H<sub>2</sub>O</p>

<p><b>g.</b> FeCl<sub>3</sub> + MgO &rarr; Fe<sub>2</sub>O<sub>3</sub> + MgCl<sub>2</sub></p>

<p><b>h.</b> BaCl<sub>2</sub> + K<sub>3</sub>PO<sub>4</sub> &rarr; Ba<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> + KCl</p>

<p><b>i.</b> P<sub>4</sub>O<sub>10</sub> + H<sub>2</sub>O &rarr; H<sub>3</sub>PO<sub>4</sub></p>
<h3>☝️☝️ hulunm sira keza check arg balance endehonu</h3>
<button onclick="cg10u1p3()">Next lesson</button>
<button onclick="Cunit1()">Back</button>
  `;
}
function balance(){
  document.getElementById("in").innerHTML="a=2,b=2,c=2 and d=3 ---> 2Al + 2H₃PO₄ → 2AlPO₄ + 3H₂"
  
}
function cg10u1p3(){
  document.body.innerHTML=`
  <h3>Types of chemical reaction</h3>
  <p><b>1.Direct combination</b></p>
  <p><b>2.Decompostion</b></p>
  <p><b>3.Displacement</b></p>
  <p><b>4.Double displacement</b></p>
  <p>A. Direct combination of reaction</p>
  <p>Combination reaction is those reaction in which two types of pur substance react directly and form a single substance</p>
  <p>In combination reaction ,two elements,two compounds or two element and a compound react to form single compound</p>
  <p>A+B--->AB</p>
  <p>Combination reaction ማለት ሁለት ወይም ከዚያ በላይ ንጥረ ነገሮች (substances) በቀጥታ ተዋህደው አንድ ነጠላ ንጥረ ነገር የሚፈጥሩበት የኬሚካል ምላሽ ነው።<br>
በቀላሉ:
👉 ብዙ ንጥረ ነገሮች → አንድ ምርት
ሊሆን የሚችለው<br>
1.ሁለት elements ሊዋሃዱ ይችላሉ።<br>
2.ሁለት compounds ሊዋሃዱ ይችላሉ።<br>
3.አንድ element + አንድ compound ሊዋሃዱ ይችላሉ።<br>
አጠቃላይ ቀመር
A + B → AB
ማለትም A እና B ተዋህደው AB የተባለ አንድ ምርት ይፈጥራሉ።<br>
ምሳሌ
2H₂ + O₂ → 2H₂O
እዚህ Hydrogen (H₂) እና Oxygen (O₂) ተዋህደው አንድ አይነት ምርት Water (H₂O) ፈጥረዋል።</p>
<p>Example: </p>
<p>2Na + Cl<sub>2</sub> ---> 2NaCl<br>
Element + Element ---> Compound</p>
<p>CaO + CO<sub>2</sub> ---> CaCO<sub>3</sub><br>
Compound + Compound ---> Compound</p>
<h3>Bekelalu direct combination mehonun mitakewu be product side minim lela midemer neger yelem and compound bicha nw mikemetewu</h3>
<p>B. Decomposition reaction</p>
<p>Decomposition reaction(woym belela simu analysis ybalali) is a reaction that involves the breaking down of single compound into two or more elements.</p>
<p>A decomposition reaction can be  carried out using heat,light , electric city, or catalyst</p>
<p>But Most decomposition reaction are carried out when heat is supplied and this heat energy is indicated by delta (∆) symbol above the arrow</p>
<p>AB ---> A + B</p>
<p> Decomposition reaction ማለት አንድ ውህድ (compound) ተሰባብሮ ሁለት ወይም ከዚያ በላይ products የሚፈጥርበት የኬሚካል ምላሽ ነው።<br>
በቀላሉ፦
አንድ compound → ሁለት ወይም ከዚያ በላይ products<br>
ምላሹ ሊከናወን የሚችለው
Decomposition reaction በተለያዩ ኃይሎች ሊከናወን ይችላል፦<br>
1.🔥 Heat (ሙቀት)<br>
2.💡 Light (ብርሃን)<br>
3.⚡ Electricity (ኤሌክትሪክ)<br>
4.Catalyst (ካታሊስት)<br>
ነገር ግን ብዙ decomposition reactions ሙቀት በመስጠት ይከናወናሉ።<br>
ሙቀት እንደሚሰጥ ለማሳየት ∆ (delta) ምልክት ከarrow በላይ ይጻፋል።<br>
AB → A + B<br>
ማለትም AB የተባለ አንድ compound ተበላሽቶ A እና B የተባሉ ምርቶችን ይፈጥራል።<br>
ምሳሌ<br>
CaCO₃ → CaO + CO₂<br>
ይህ reaction ሙቀት በመስጠት ሲከናወን፦<br>
CaCO₃ ──∆→ CaO + CO₂<br>
እዚህ አንድ compound (CaCO₃) ተሰባብሮ CaO እና CO₂ ሁለት products ፈጥሯል። ስለዚህ decomposition reaction ነው። </p>
<h4>Ahun kez meyaz yalebik neger combination malet hulet negerochin wode andi mekeyer nw neger gn decomposition malet demo anid negerin wode hulet neger mekeyer nw hulet opposite nachewu</h4>
<p>C. single displacement</p>
<p>A reaction in which one element displace another element from its compound is know as single displacement or replacement reaction </p>
<p>A + BC ---> B + AC</p>
<p>If A is metal, it will displace B to form AC , provided A is more active metal than B</p>
<p>More reactive elements displace a less reactive elements from compound</p>
<p>Single displacement reaction ወይም replacement reaction ማለት አንድ element ከአንድ compound ውስጥ ሌላ elementን በመተካት አዲስ compound የሚፈጥርበት የኬሚካል ምላሽ ነው።<br>
በቀላሉ፦
👉 አንድ element + አንድ compound → አዲስ element + አዲስ compound<br>
A + BC → B + AC<br>
እዚህ A የሚባለው element ከcompound BC ውስጥ B ን ያስወጣል። ከዚያ AC የሚባል አዲስ compound ይፈጠራል።<br>
መቼ ነው የሚከሰተው?<br>
A ብረት (metal) ከሆነ፣ Bን ለመተካት A ከB የበለጠ reactive (active) መሆን አለበት።<br>
ስለዚህ፦<br>
More reactive element → less reactive elementን ከcompound ውስጥ ያስወጣል።<br>
ምሳሌ<br>
Zn + CuSO₄ → ZnSO₄ + Cu<br>
እዚህ፦<br>
Zn = Zinc<br>
CuSO₄ = Copper sulfate<br>
Zn ከCu የበለጠ reactive ስለሆነ Cuን ከcompound ውስጥ ያስወጣል።<br>
ስለዚህ ZnSO₄ እና Cu ይፈጠራሉ።<br>
Zn + CuSO₄ → ZnSO₄ + Cu ስለዚህ Single Displacement Reaction ነው።</p>
<p>D.Double displacement reaction</p>
<p>A double displacement reaction(metathesis)is a reaction in which two compound react together to form two new compound by exchange of the positive and negative ions of each reactant</p>
<p>AB + CD ---> AD + CB </p>
<p>Double displacement reaction ወይም metathesis reaction ማለት ሁለት compounds እርስ በርሳቸው ሲነካኩ የእያንዳንዱ compound positive ion እና negative ion ቦታ በመቀያየር ሁለት አዲስ compounds የሚፈጥሩበት ምላሽ ነው።<br>
በቀላሉ፦<br>
👉 Compound + Compound → New compound + New compound<br>
AB + CD → AD + CB<br>
እዚህ፦<br>
AB = የመጀመሪያ compound<br>
CD = ሁለተኛ compound<br>
A እና C = positive ions (cations)<br>
B እና D = negative ions (anions)<br>
በምላሹ ጊዜ B እና D ይቀያየራሉ።<br>
ምሳሌ<br>
AgNO₃ + NaCl → AgCl + NaNO₃<br>
እዚህ፦<br>
Ag⁺ ከ NO₃⁻ ተለይቶ Cl⁻ ጋር ይገናኛል።<br>
Na⁺ ደግሞ NO₃⁻ ጋር ይገናኛል።<br>
ስለዚህ፦<br>
AgNO₃ + NaCl → AgCl + NaNO₃<br>
ይህ Double Displacement Reaction ነው።</p>
<p>Be kelalil amarigna aratun endet tileyalek meseleki bekelalu</p>
<p>Composition kehone Be product side 1 compound bicha nw mimorewu lela + tedergo aydemerim</p>
<p>Decomposition kehone demo be reactants side 1 compound tesebabiro be product side hulet sihonu be reactants bekul 1 compound bicha nw minorewu</p>
<p>Single displacement kehone demo be reactants bekul and single element ena 1 compound ena be product bekulm 1 element ena 1 compound sinor nw</p>
  <p>Double displacement kehone demo be reactants side 1 compound sidemr lela compound ena be product sidim temesasy 1 compound sidemer lela compound sinor nw kezi belaya mabrarati alchilim</p>
  <button onclick="cg10u1q()">quiz</button>
  <button onclick="Pt()">Back</button>
  
  
  `;
}
function cg10u1q(){
  document.body.innerHTML=`
<!-- Question 1 -->
<p><b>1. What is a physical change?</b></p>
<input type="radio" name="q1" id="q1a"> A. A change that forms a new substance<br>
<input type="radio" name="q1" id="q1b"> B. A change that does not form a new substance<br>
<input type="radio" name="q1" id="q1c"> C. A reaction between two compounds<br>
<input type="radio" name="q1" id="q1d"> D. A reaction that produces gas<br>
<button onclick="cg10u1q1()">Answer</button>
<p id="q1ans"></p>


<!-- Question 2 -->
<p><b>2. Which of the following is a physical change?</b></p>
<input type="radio" name="q2" id="q2a"> A. Burning wood<br>
<input type="radio" name="q2" id="q2b"> B. Cooking food<br>
<input type="radio" name="q2" id="q2c"> C. Melting ice<br>
<input type="radio" name="q2" id="q2d"> D. Burning paper<br>
<button onclick="cg10u1q2()">Answer</button>
<p id="q2ans"></p>


<!-- Question 3 -->
<p><b>3. Which one is a chemical change?</b></p>
<input type="radio" name="q3" id="q3a"> A. Cutting paper<br>
<input type="radio" name="q3" id="q3b"> B. Melting ice<br>
<input type="radio" name="q3" id="q3c"> C. Boiling water<br>
<input type="radio" name="q3" id="q3d"> D. Burning wood<br>
<button onclick="cg10u1q3()">Answer</button>
<p id="q3ans"></p>


<!-- Question 4 -->
<p><b>4. Which is evidence of a chemical change?</b></p>
<input type="radio" name="q4" id="q4a"> A. Change in color<br>
<input type="radio" name="q4" id="q4b"> B. Change in shape only<br>
<input type="radio" name="q4" id="q4c"> C. Cutting into smaller pieces<br>
<input type="radio" name="q4" id="q4d"> D. Melting<br>
<button onclick="cg10u1q4()">Answer</button>
<p id="q4ans"></p>


<!-- Question 5 -->
<p><b>5. A chemical reaction is a process in which reactants are converted into:</b></p>
<input type="radio" name="q5" id="q5a"> A. Atoms only<br>
<input type="radio" name="q5" id="q5b"> B. Products<br>
<input type="radio" name="q5" id="q5c"> C. Elements only<br>
<input type="radio" name="q5" id="q5d"> D. Reactants<br>
<button onclick="cg10u1q5()">Answer</button>
<p id="q5ans"></p>


<!-- Question 6 -->
<p><b>6. What is stoichiometry?</b></p>
<input type="radio" name="q6" id="q6a"> A. Study of colors<br>
<input type="radio" name="q6" id="q6b"> B. Study of atoms only<br>
<input type="radio" name="q6" id="q6c"> C. Quantitative study of reactants and products<br>
<input type="radio" name="q6" id="q6d"> D. Study of temperature only<br>
<button onclick="cg10u1q6()">Answer</button>
<p id="q6ans"></p>


<!-- Question 7 -->
<p><b>7. In a chemical equation, substances before the arrow are called:</b></p>
<input type="radio" name="q7" id="q7a"> A. Products<br>
<input type="radio" name="q7" id="q7b"> B. Reactants<br>
<input type="radio" name="q7" id="q7c"> C. Catalysts<br>
<input type="radio" name="q7" id="q7d"> D. Ions<br>
<button onclick="cg10u1q7()">Answer</button>
<p id="q7ans"></p>


<!-- Question 8 -->
<p><b>8. In H₂ + O₂ → H₂O, H₂ and O₂ are:</b></p>
<input type="radio" name="q8" id="q8a"> A. Products<br>
<input type="radio" name="q8" id="q8b"> B. Reactants<br>
<input type="radio" name="q8" id="q8c"> C. Catalysts<br>
<input type="radio" name="q8" id="q8d"> D. Salts<br>
<button onclick="cg10u1q8()">Answer</button>
<p id="q8ans"></p>


<!-- Question 9 -->
<p><b>9. In H₂ + O₂ → H₂O, H₂O is the:</b></p>
<input type="radio" name="q9" id="q9a"> A. Reactant<br>
<input type="radio" name="q9" id="q9b"> B. Element<br>
<input type="radio" name="q9" id="q9c"> C. Product<br>
<input type="radio" name="q9" id="q9d"> D. Catalyst<br>
<button onclick="cg10u1q9()">Answer</button>
<p id="q9ans"></p>


<!-- Question 10 -->
<p><b>10. What is the balanced equation for hydrogen reacting with oxygen?</b></p>
<input type="radio" name="q10" id="q10a"> A. H₂ + O₂ → H₂O<br>
<input type="radio" name="q10" id="q10b"> B. 2H₂ + O₂ → 2H₂O<br>
<input type="radio" name="q10" id="q10c"> C. H₂ + 2O₂ → H₂O<br>
<input type="radio" name="q10" id="q10d"> D. 2H₂ + 2O₂ → H₂O<br>
<button onclick="cg10u1q10()">Answer</button>
<p id="q10ans"></p>


<!-- Question 11 -->
<p><b>11. Which coefficient balances H₂ + O₂ → H₂O?</b></p>
<input type="radio" name="q11" id="q11a"> A. 1,1,1<br>
<input type="radio" name="q11" id="q11b"> B. 2,1,2<br>
<input type="radio" name="q11" id="q11c"> C. 1,2,2<br>
<input type="radio" name="q11" id="q11d"> D. 2,2,1<br>
<button onclick="cg10u1q11()">Answer</button>
<p id="q11ans"></p>


<!-- Question 12 -->
<p><b>12. What is the balanced equation for nitrogen and hydrogen producing ammonia?</b></p>
<input type="radio" name="q12" id="q12a"> A. N₂ + H₂ → NH₃<br>
<input type="radio" name="q12" id="q12b"> B. N₂ + 3H₂ → 2NH₃<br>
<input type="radio" name="q12" id="q12c"> C. 2N₂ + H₂ → 2NH₃<br>
<input type="radio" name="q12" id="q12d"> D. N₂ + 2H₂ → NH₃<br>
<button onclick="cg10u1q12()">Answer</button>
<p id="q12ans"></p>


<!-- Question 13 -->
<p><b>13. Which method uses the least common multiple of atom numbers?</b></p>
<input type="radio" name="q13" id="q13a"> A. Algebraic method<br>
<input type="radio" name="q13" id="q13b"> B. LCM method<br>
<input type="radio" name="q13" id="q13c"> C. Graph method<br>
<input type="radio" name="q13" id="q13d"> D. Fraction method<br>
<button onclick="cg10u1q13()">Answer</button>
<p id="q13ans"></p>


<!-- Question 14 -->
<p><b>14. In the equation Al + O₂ → Al₂O₃, what is the balanced equation?</b></p>
<input type="radio" name="q14" id="q14a"> A. 2Al + O₂ → Al₂O₃<br>
<input type="radio" name="q14" id="q14b"> B. 4Al + 3O₂ → 2Al₂O₃<br>
<input type="radio" name="q14" id="q14c"> C. Al + 2O₂ → Al₂O₃<br>
<input type="radio" name="q14" id="q14d"> D. 3Al + 2O₂ → Al₂O₃<br>
<button onclick="cg10u1q14()">Answer</button>
<p id="q14ans"></p>


<!-- Question 15 -->
<p><b>15. Which of the following is a combination reaction?</b></p>
<input type="radio" name="q15" id="q15a"> A. AB → A + B<br>
<input type="radio" name="q15" id="q15b"> B. A + BC → AC + B<br>
<input type="radio" name="q15" id="q15c"> C. A + B → AB<br>
<input type="radio" name="q15" id="q15d"> D. AB + CD → AD + CB<br>
<button onclick="cg10u1q15()">Answer</button>
<p id="q15ans"></p>


<!-- Question 16 -->
<p><b>16. What is the general form of a combination reaction?</b></p>
<input type="radio" name="q16" id="q16a"> A. AB → A + B<br>
<input type="radio" name="q16" id="q16b"> B. A + BC → AC + B<br>
<input type="radio" name="q16" id="q16c"> C. A + B → AB<br>
<input type="radio" name="q16" id="q16d"> D. AB + CD → AD + CB<br>
<button onclick="cg10u1q16()">Answer</button>
<p id="q16ans"></p>


<!-- Question 17 -->
<p><b>17. Which equation is a combination reaction?</b></p>
<input type="radio" name="q17" id="q17a"> A. 2Na + Cl₂ → 2NaCl<br>
<input type="radio" name="q17" id="q17b"> B. CaCO₃ → CaO + CO₂<br>
<input type="radio" name="q17" id="q17c"> C. Zn + CuSO₄ → ZnSO₄ + Cu<br>
<input type="radio" name="q17" id="q17d"> D. AgNO₃ + NaCl → AgCl + NaNO₃<br>
<button onclick="cg10u1q17()">Answer</button>
<p id="q17ans"></p>


<!-- Question 18 -->
<p><b>18. A decomposition reaction involves:</b></p>
<input type="radio" name="q18" id="q18a"> A. Many substances forming one product<br>
<input type="radio" name="q18" id="q18b"> B. One compound breaking into two or more products<br>
<input type="radio" name="q18" id="q18c"> C. Two compounds exchanging ions<br>
<input type="radio" name="q18" id="q18d"> D. One element replacing another<br>
<button onclick="cg10u1q18()">Answer</button>
<p id="q18ans"></p>


<!-- Question 19 -->
<p><b>19. What is the general form of a decomposition reaction?</b></p>
<input type="radio" name="q19" id="q19a"> A. A + B → AB<br>
<input type="radio" name="q19" id="q19b"> B. A + BC → AC + B<br>
<input type="radio" name="q19" id="q19c"> C. AB → A + B<br>
<input type="radio" name="q19" id="q19d"> D. AB + CD → AD + CB<br>
<button onclick="cg10u1q19()">Answer</button>
<p id="q19ans"></p>


<!-- Question 20 -->
<p><b>20. Which equation is a decomposition reaction?</b></p>
<input type="radio" name="q20" id="q20a"> A. 2Na + Cl₂ → 2NaCl<br>
<input type="radio" name="q20" id="q20b"> B. CaCO₃ → CaO + CO₂<br>
<input type="radio" name="q20" id="q20c"> C. Zn + CuSO₄ → ZnSO₄ + Cu<br>
<input type="radio" name="q20" id="q20d"> D. H₂ + Cl₂ → 2HCl<br>
<button onclick="cg10u1q20()">Answer</button>
<p id="q20ans"></p>


<!-- Question 21 -->
<p><b>21. Which symbol can indicate that heat is supplied to a decomposition reaction?</b></p>
<input type="radio" name="q21" id="q21a"> A. α<br>
<input type="radio" name="q21" id="q21b"> B. β<br>
<input type="radio" name="q21" id="q21c"> C. Δ<br>
<input type="radio" name="q21" id="q21d"> D. θ<br>
<button onclick="cg10u1q21()">Answer</button>
<p id="q21ans"></p>


<!-- Question 22 -->
<p><b>22. Single displacement reaction has the general form:</b></p>
<input type="radio" name="q22" id="q22a"> A. A + B → AB<br>
<input type="radio" name="q22" id="q22b"> B. AB → A + B<br>
<input type="radio" name="q22" id="q22c"> C. A + BC → B + AC<br>
<input type="radio" name="q22" id="q22d"> D. AB + CD → AD + CB<br>
<button onclick="cg10u1q22()">Answer</button>
<p id="q22ans"></p>


<!-- Question 23 -->
<p><b>23. In a single displacement reaction, a more reactive element:</b></p>
<input type="radio" name="q23" id="q23a"> A. Cannot react<br>
<input type="radio" name="q23" id="q23b"> B. Displaces a less reactive element<br>
<input type="radio" name="q23" id="q23c"> C. Always forms water<br>
<input type="radio" name="q23" id="q23d"> D. Becomes a catalyst<br>
<button onclick="cg10u1q23()">Answer</button>
<p id="q23ans"></p>


<!-- Question 24 -->
<p><b>24. Which is a single displacement reaction?</b></p>
<input type="radio" name="q24" id="q24a"> A. Zn + CuSO₄ → ZnSO₄ + Cu<br>
<input type="radio" name="q24" id="q24b"> B. CaCO₃ → CaO + CO₂<br>
<input type="radio" name="q24" id="q24c"> C. 2Na + Cl₂ → 2NaCl<br>
<input type="radio" name="q24" id="q24d"> D. AgNO₃ + NaCl → AgCl + NaNO₃<br>
<button onclick="cg10u1q24()">Answer</button>
<p id="q24ans"></p>


<!-- Question 25 -->
<p><b>25. In Zn + CuSO₄ → ZnSO₄ + Cu, which element is displaced?</b></p>
<input type="radio" name="q25" id="q25a"> A. Zinc<br>
<input type="radio" name="q25" id="q25b"> B. Sulfur<br>
<input type="radio" name="q25" id="q25c"> C. Copper<br>
<input type="radio" name="q25" id="q25d"> D. Oxygen<br>
<button onclick="cg10u1q25()">Answer</button>
<p id="q25ans"></p>


