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
    <button onclick="backHome()">Back</button>
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
    <button onclick="backHome()">Back</button>
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
  
  
  
  
  
  
  
  `;
}
function backHome(){
    start();
}
