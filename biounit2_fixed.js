function Bunit2(){
  document.body.innerHTML= `
      <h1>Unit Two</h1>
      <h2>Characteristics and classification of organisms</h2>
      <h3>## Characteristics of all living things.</h3>
      <p>hulum hiywot yalachew negeroch temesasay yehone bahir alachewu.</p>
      <ol>
          <li>
          <b>All living things are made up of one or more cell</b><br>
          Hulum hiywot yalachewu nigeroch yetegenebut ke and woym ke and belay kehonu celloch nw.<br>
          Those made up of one cell,such as <strong>bacteria</strong> are called <b> Unicellular</b><br>
          Enesu ke and cell yeteseru lemisale bacteria,kehonu Unicellular enilalen.<br>
          Those made up of more than one cell ,such as <b>plant</b> are called <b>Mult-cellular</b> enlalen.<br>
          Ena ke hulet belay kehonu celloch yetegenebu kehonu lemisale plant Multicellular enlalen.</li>
          <li>
          <b>All living things requires energy</b><br>
          Hulum hiywot yalchewu negeroch gulibet(energy ) yfelgalu.<br>
          All organisms use a source of energy from their <b>Metabolic Activities.</b><br>
          Hulum organismoch energy miyagegnut yebelutni migib bemakatel nw.<br>
          Silez metabolism malet yebelanewun migib bemakatel energy yeminagegnbet mengeb nw yhin endatresa metabolism mindnw teblek keteteyek.<br>
          Some organisms use energy from the sun light to make their food through the process of <b>Photosynthesis</b><br>
          And and organismoch ye tsehay birhanin bemetekem migib yseralu ena yhi hidete tsehayni tetekmo migib miserubet hidet photosynthesis nw minalewu endatresa.<br>
          Yerasachewun migib mesirta michilu lemisale plant producers woym <b>autotrophs</b> nw mibalut.<br>
          <b>Autotrophs</b> is an organism which produce(ማዘጋጀት) their own food.<br>
          Other organisms can not make their own food but consume other(ለሎችን ምመገቡ) such organisms are known as Consumer or <b> Heterotrophs.</b><br>
          Ena leloch yerasachewun migib mazegajet yemaychlu lelochn mimegebu lemisale ende sewu Consumers woym <b>heterotrophs</b> nw mibalut.</li>
          <li>
          <b>All living organisms respond to stimuli.</b><br>
          Sile and neger milash ysetalu hulum hiywot yalachewu negeroch lemisale be ejachn yemoke neger sinineka yefetena enanesalen yaha nw milash mesitet malet.</li>
          <li>
          <b>All living things can grow</b><br>
          Hulum hiywot yalachew negeroch yadigalu</li>
          <li>
          <b>All living things can reproduce(መራባት)</b><br>
          Hulum hiyot yalachew negeroch yirabalu</li>
          <li>
          <b>All living things can excrete</b><br>
          Hulum hiywot yalchewu negeroch koshshan yasiwogidalu lemisale be metsedadat</li>
          </ol>
          <p>Kelay yayenachew 6 negeroch hulum hiywot yalachew negeroch miyadergut bahri woym tegbar nw</p>
          <p>Most living things maintain <b> Homeostasis</b></p>
          <p><b>Homeostasis</b> is maintain(መቆጣጠር) internal(ውስጣዊ) internal ምለውን ቃል እንዳትረሳ condition or temperature constant</p>
          <p>Homeostasis malet wustawi hidetochn constan(እንዳይቀየር) mareg nw le misale simoken yalibenal haa yemiyaliben wusxachn constant endihon lemareg nw wusxachn constant kalhone chigr silemifeter nw</p>
          <h1>Taxonomy of living things</h1>
          <h2>አሁን ከዚ ቧሀላ ትምህርቱ በጣም ስለ ምከብድ በደንብ ተከታተል</h2>
          <p><b>Classification</b> is the process of grouping things based on their similarities</p>
          <p>Classification malet bemiyamesasilachewu lay temerkuzen be group yeminaskemixibet hidet nw</p>
          <p><b>Taxonomy</b> is science that naming, identify and classifying organisms</p>
          <p><b>Taxonomy</b> science sihone organismoch endet endemileyayu miyatena, organismochm mikefafil ena le organismoch sim misexi nw yhi science</p>
          <h2>How does taxonomist classify(መከፈል) organism - taxonomist endet nw organismochn mikefafilut?</h2>
          <ul>
          <li>
          <b>External and internal structure of organisms</b><br>
          Wusxawina wuchawi aserarachewun bemayet</li>
          <li>
          <b>Where the organism lives(water or land(መረት))</b><br>
          Organismochu yet nw minorut woys wust woys meret lay</li>
          <li><b>By considering the genetic(ዘር) make up of organisms</b><br>
          Lelawu demo yezer haregachewin bemayet nw</li>
          </ul>
        <h2>Why do biologists classify living things- lemnd nw biologistoch hiywot yalachewun negeroch classify miyaregut</h2>
        <ol>
        <li><b>To simplify(ማቃለል) their study</b>-Ye atenani zeden lemaqaleli</li>
        <li><b> To bring order out/remove chaos or confusion</b> - almegibabatin lemasiwoged </li>
        <li><b>To try to understand how life originated</b>- ye hiywot meneshan lemawok nw</li>
        </ol>
        <h4>እንዳይ በዛ እስካሁን በተማርከው ላይ quiz ልፈትንክ እና መልሱን  ስትጫን ትክክል ውይም ትክክል እንዳልሆንክ እዛው ይነግርካል እና ከመመለስህ በፈት በደንብ አሰላስል</h4>
        <button onclick="bquiz()">quiz</button>
`;
}
function bquiz(){
  document.body.innerHTML=`
  <h2>Quiz: Characteristics and Classification of Organisms</h2>

<h3>1. What are living things made up of?</h3>

<input type="radio" name="q1" onclick="checkQ1('A')">
A. Tissues only<br>

<input type="radio" name="q1" onclick="checkQ1('B')">
B. One or more cells<br>

<input type="radio" name="q1" onclick="checkQ1('C')">
C. Organs only<br>

<input type="radio" name="q1" onclick="checkQ1('D')">
D. Water only<br>

<p id="answer1"></p>


<h3>2. What are organisms made up of only one cell called?</h3>

<input type="radio" name="q2" onclick="checkQ2('A')">
A. Multicellular<br>

<input type="radio" name="q2" onclick="checkQ2('B')">
B. Autotrophs<br>

<input type="radio" name="q2" onclick="checkQ2('C')">
C. Unicellular<br>

<input type="radio" name="q2" onclick="checkQ2('D')">
D. Heterotrophs<br>

<p id="answer2"></p>


<h3>3. Which of the following is an example of a unicellular organism?</h3>

<input type="radio" name="q3" onclick="checkQ3('A')">
A. Plant<br>

<input type="radio" name="q3" onclick="checkQ3('B')">
B. Bacteria<br>

<input type="radio" name="q3" onclick="checkQ3('C')">
C. Human<br>

<input type="radio" name="q3" onclick="checkQ3('D')">
D. Tree<br>

<p id="answer3"></p>


<h3>4. What are organisms made up of more than one cell called?</h3>

<input type="radio" name="q4" onclick="checkQ4('A')">
A. Unicellular<br>

<input type="radio" name="q4" onclick="checkQ4('B')">
B. Multicellular<br>

<input type="radio" name="q4" onclick="checkQ4('C')">
C. Autotrophs<br>

<input type="radio" name="q4" onclick="checkQ4('D')">
D. Consumers<br>

<p id="answer4"></p>


<h3>5. What do all living things require?</h3>

<input type="radio" name="q5" onclick="checkQ5('A')">
A. Energy<br>

<input type="radio" name="q5" onclick="checkQ5('B')">
B. Soil only<br>

<input type="radio" name="q5" onclick="checkQ5('C')">
C. Sunlight only<br>

<input type="radio" name="q5" onclick="checkQ5('D')">
D. Water only<br>

<p id="answer5"></p>


<h3>6. What process do some organisms use to make their own food using sunlight?</h3>

<input type="radio" name="q6" onclick="checkQ6('A')">
A. Excretion<br>

<input type="radio" name="q6" onclick="checkQ6('B')">
B. Classification<br>

<input type="radio" name="q6" onclick="checkQ6('C')">
C. Photosynthesis<br>

<input type="radio" name="q6" onclick="checkQ6('D')">
D. Reproduction<br>

<p id="answer6"></p>


<h3>7. What are organisms that produce their own food called?</h3>

<input type="radio" name="q7" onclick="checkQ7('A')">
A. Consumers<br>

<input type="radio" name="q7" onclick="checkQ7('B')">
B. Heterotrophs<br>

<input type="radio" name="q7" onclick="checkQ7('C')">
C. Autotrophs<br>

<input type="radio" name="q7" onclick="checkQ7('D')">
D. Taxonomists<br>

<p id="answer7"></p>


<h3>8. What are organisms that cannot make their own food called?</h3>

<input type="radio" name="q8" onclick="checkQ8('A')">
A. Autotrophs<br>

<input type="radio" name="q8" onclick="checkQ8('B')">
B. Heterotrophs<br>

<input type="radio" name="q8" onclick="checkQ8('C')">
C. Producers<br>

<input type="radio" name="q8" onclick="checkQ8('D')">
D. Plants<br>

<p id="answer8"></p>


<h3>9. What does it mean when living organisms respond to stimuli?</h3>

<input type="radio" name="q9" onclick="checkQ9('A')">
A. They react to changes around them<br>

<input type="radio" name="q9" onclick="checkQ9('B')">
B. They stop growing<br>

<input type="radio" name="q9" onclick="checkQ9('C')">
C. They stop reproducing<br>

<input type="radio" name="q9" onclick="checkQ9('D')">
D. They stop using energy<br>

<p id="answer9"></p>


<h3>10. Which of the following is a characteristic of living things?</h3>

<input type="radio" name="q10" onclick="checkQ10('A')">
A. They can grow<br>

<input type="radio" name="q10" onclick="checkQ10('B')">
B. They cannot reproduce<br>

<input type="radio" name="q10" onclick="checkQ10('C')">
C. They cannot excrete<br>

<input type="radio" name="q10" onclick="checkQ10('D')">
D. They never need energy<br>

<p id="answer10"></p>


<h3>11. What is homeostasis?</h3>

<input type="radio" name="q11" onclick="checkQ11('A')">
A. Making food<br>

<input type="radio" name="q11" onclick="checkQ11('B')">
B. Maintaining internal conditions relatively constant<br>

<input type="radio" name="q11" onclick="checkQ11('C')">
C. Grouping organisms<br>

<input type="radio" name="q11" onclick="checkQ11('D')">
D. Removing organisms<br>

<p id="answer11"></p>


<h3>12. What is classification?</h3>

<input type="radio" name="q12" onclick="checkQ12('A')">
A. Making food<br>

<input type="radio" name="q12" onclick="checkQ12('B')">
B. Grouping things based on their similarities<br>

<input type="radio" name="q12" onclick="checkQ12('C')">
C. Removing waste<br>

<input type="radio" name="q12" onclick="checkQ12('D')">
D. Reproduction<br>

<p id="answer12"></p>


<h3>13. What is taxonomy?</h3>

<input type="radio" name="q13" onclick="checkQ13('A')">
A. The science of naming, identifying and classifying organisms<br>

<input type="radio" name="q13" onclick="checkQ13('B')">
B. The process of producing energy<br>

<input type="radio" name="q13" onclick="checkQ13('C')">
C. The study of weather<br>

<input type="radio" name="q13" onclick="checkQ13('D')">
D. The process of photosynthesis<br>

<p id="answer13"></p>


<h3>14. Which of these can taxonomists consider when classifying organisms?</h3>

<input type="radio" name="q14" onclick="checkQ14('A')">
A. External and internal structure<br>

<input type="radio" name="q14" onclick="checkQ14('B')">
B. Where the organism lives<br>

<input type="radio" name="q14" onclick="checkQ14('C')">
C. Genetic makeup<br>

<input type="radio" name="q14" onclick="checkQ14('D')">
D. All of the above<br>

<p id="answer14"></p>


<h3>15. Why do biologists classify living things?</h3>

<input type="radio" name="q15" onclick="checkQ15('A')">
A. To make studying more difficult<br>

<input type="radio" name="q15" onclick="checkQ15('B')">
B. To simplify their study<br>

<input type="radio" name="q15" onclick="checkQ15('C')">
C. To stop organisms from growing<br>

<input type="radio" name="q15" onclick="checkQ15('D')">
D. To stop reproduction<br>

<p id="answer15"></p>
<button onclick="bu1p2()">Next lesson</button>

  `;

}
function checkQ1(answer) {
    if (answer === "B") {
        document.getElementById("answer1").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> All living things are made up of one or more cells.";
    } else {
        document.getElementById("answer1").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. One or more cells</b><br>" +
        "<b>Explanation:</b> All living things are made up of one or more cells.";
    }
}


function checkQ2(answer) {
    if (answer === "C") {
        document.getElementById("answer2").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Organisms made up of only one cell are called unicellular organisms.";
    } else {
        document.getElementById("answer2").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Unicellular</b><br>" +
        "<b>Explanation:</b> Organisms made up of only one cell are called unicellular organisms.";
}
}
function checkQ3(answer) {
    if (answer === "B") {
        document.getElementById("answer3").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Bacteria can be made up of one cell.";
    } else {
        document.getElementById("answer3").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Bacteria</b><br>" +
        "<b>Explanation:</b> Bacteria can be made up of one cell.";
    }
}


function checkQ4(answer) {
    if (answer === "B") {
        document.getElementById("answer4").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Organisms made up of more than one cell are called multicellular organisms.";
    } else {
        document.getElementById("answer4").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Multicellular</b><br>" +
        "<b>Explanation:</b> Multicellular organisms are made up of more than one cell.";
    }
}


function checkQ5(answer) {
    if (answer === "A") {
        document.getElementById("answer5").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> All living things require energy for their metabolic activities.";
    } else {
        document.getElementById("answer5").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Energy</b><br>" +
        "<b>Explanation:</b> All living things require energy for their metabolic activities.";
    }
}


function checkQ6(answer) {
    if (answer === "C") {
        document.getElementById("answer6").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Photosynthesis is the process by which some organisms use sunlight to make their food.";
    } else {
        document.getElementById("answer6").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Photosynthesis</b><br>" +
        "<b>Explanation:</b> Photosynthesis uses sunlight to make food.";
    }
}


function checkQ7(answer) {
    if (answer === "C") {
        document.getElementById("answer7").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Autotrophs are organisms that produce their own food.";
    } else {
        document.getElementById("answer7").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Autotrophs</b><br>" +
        "<b>Explanation:</b> Autotrophs produce their own food.";
    }
}


function checkQ8(answer) {
    if (answer === "B") {
        document.getElementById("answer8").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Heterotrophs cannot make their own food and consume other organisms.";
    } else {
        document.getElementById("answer8").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Heterotrophs</b><br>" +
        "<b>Explanation:</b> Heterotrophs cannot make their own food.";
    }
}


function checkQ9(answer) {
    if (answer === "A") {
        document.getElementById("answer9").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Living organisms respond to stimuli, meaning they react to changes around them.";
    } else {
        document.getElementById("answer9").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. They react to changes around them</b><br>" +
        "<b>Explanation:</b> Living organisms can respond to stimuli.";
    }
}


function checkQ10(answer) {
    if (answer === "A") {
        document.getElementById("answer10").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Growth is one of the characteristics of living things.";
    } else {
        document.getElementById("answer10").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. They can grow</b><br>" +
        "<b>Explanation:</b> Living things can grow.";
    }
}


function checkQ11(answer) {
    if (answer === "B") {
        document.getElementById("answer11").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Homeostasis means maintaining internal conditions relatively constant.";
    } else {
        document.getElementById("answer11").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Maintaining internal conditions relatively constant</b><br>" +
        "<b>Explanation:</b> Homeostasis helps organisms maintain stable internal conditions.";
    }
}


function checkQ12(answer) {
    if (answer === "B") {
        document.getElementById("answer12").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Classification is the process of grouping things based on their similarities.";
    } else {
        document.getElementById("answer12").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Grouping things based on their similarities</b><br>" +
        "<b>Explanation:</b> Classification groups organisms according to similarities.";
    }
}


function checkQ13(answer) {
    if (answer === "A") {
        document.getElementById("answer13").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Taxonomy is the science of naming, identifying and classifying organisms.";
    } else {
        document.getElementById("answer13").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. The science of naming, identifying and classifying organisms</b><br>" +
        "<b>Explanation:</b> Taxonomy deals with naming, identifying and classifying organisms.";
    }
}


function checkQ14(answer) {
    if (answer === "D") {
        document.getElementById("answer14").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Taxonomists can consider structure, habitat and genetic makeup when classifying organisms.";
    } else {
        document.getElementById("answer14").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: D. All of the above</b><br>" +
        "<b>Explanation:</b> External and internal structure, habitat and genetic makeup can be considered.";
    }
}


function checkQ15(answer) {
    if (answer === "B") {
        document.getElementById("answer15").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Biologists classify living things to simplify their study.";
    } else {
        document.getElementById("answer15").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. To simplify their study</b><br>" +
        "<b>Explanation:</b> Classification makes the study of living things easier and more organized.";
    }
}
function bu1p2(){
    document.body.innerHTML=`
    <h1>ትምህርቱ እይከበደ እየሄደ ነው እና በደንብ ደጋግመክ አንብብ</h1>
    <p><b>Carolus Linnaeus(ካርሎስ ልነስ)</b> - who is also known as the father of taxonomy, introduced a taxonomic hierarchy of classification</p>
    <p><b>Carolus Linnaeus</b> mibal sewu nw lemejemerya gize yhin taxonomy mibalewun hasab yametawu leza nw ye taxonomy father woym abat mibalewu</p>
    <p><b>Taxonomic hierarchy</b> is the process of arranging various organisms in to successive level of biological classification either in a decreasing or an increasing order</p>
    <p> yeteleyayu organismochn ke  tilk wode tinsh woym ke tinsh wode tilik arrange woym maderajet nw</p>
    <p>Organismoch be Taxonomic hierarchy ke tliku wode tinshu classify sideregi endez yhonal</p>
    <p><b>Kingdom - Phylum -Class - Order -  Family - Genus  - Species</b></p>
    <p> ☝️☝️ Kidemeteketelun bedend yaz endatresa degagimek shemidid entrance fetena lay betamir mayker nw kidimeteketelu</p>
    <p><b>Eukaryotic cells</b> - cells with nucleus and membrane bound organelles</p>
    <p> Eukaryotic cells ye cell aynetoch sihonu nucleus alachewu</p>
    <p><b>Prokaryotic cells</b> - are unicellular organisms with out nucleus</p>
    <p>Prokaryotic cells demo ye cell aynetoch sihonu neger gin nucleus yelachewum</p>
    <p><b> Species</b> are a group of organisms that can reproduce to produce Fertile offspring</p>
    <h1>Relevance of classification<h1>
    <h2>Applications of classification are:(የ classifications ጥቅሞች)-</h2>
    <ol>
    <li>
    <b>Identification of harmful and beneficial organism - ጠቃምና ጉጂ የሆኑ organismochn ለመለየት</b></li>
    <li>
    <b> Reduce energy and time to study organism - organismochn ለማጥናት ጉልበትና ግዜን ለመቀነስ</b></li>
    <li>
    <b>Help us understand the r/ship between organisms - በ organismoch መካከል ያለውን ዝምድና እንድንረዳ ይረዳናል</b></li>
    </ol>
    <h2>Carl Linnaeus system of nomenclature(የ Linnaeus የስም አሰጣጥ)</h2>
    <p> Carl Linnaeus le organismoch sim yemisetewu be hulet negeroch nw</p>
    <ol>
    <li>
    The first name represents the <b>genus</b> - የመጀመርያ ስሙ የምያመለክተው genusun ነው</li>
    <li> The second name represents <b>Species</b> - ሁለተኛ ስሙ የምያመለክተው Species ነው</>
    </ol>
    <h1> ስለዝህ የ አንድ organism ስም ስንጺፊ Genus + species ነው</h1>
    <p>In writing scientific name the first letter of the name of the genus is capitalized letter</>
    <p> scientific name sinitsif Ye genus name ye mejemerya fidel capital mehon alebet</p>
    <p> ye species name be small ne minjemrewum minchersewum</>
    <p><Example</b> Ye human being scientific name <b>Homo sapiens</b> Nw</p>
    <p><b>Homo - genus name የመጀመርያ ፊደል Capital nw</b></p>
    <p><b>sapiens - species name ሙሉው small ነው</b></p>
    <p>Scientific name be eji sitsaf ketach masimer alebn</p>
    <p><b>Dichotomous keys</b> are used to identify(መለየት) unfamiliar (ማይመሳሰሉ) organisms</b></p>
    <P><b>Poikilothermic</b> - cold blooded</p>
    <p><b>Homeothermic</b> - warm blooded</p>
    <h2>What is kingdom?(kingdom sound aydelem😂😂)</h2>
    <p>Kingdom is the largest taxon astwosk ke tilku wode tinsh sinikefafil</p>
    <h2>There are five kingdoms namely:-</h2>
    <ol>
    <li>
    <b>Monera(bacteria)</b></li>
    <li><b>Protista</b></li>
    <li><b>Plantae</b></li>
    <li><b>Animalia</b></li>
    </ol>
    <h2>Kingdom Monera(bacteria)</h2>
    <p>Monera inclues(yakatital) Eubacteria and archaebacteria</p>
    <p><b>Eubacteria(true bacteria)</b> have(alewu) strong (tenkara) cell walls</p>
    <p>Some Eubacteria are heterotrophs(ይህንን ቃል ረሳክ ሀ 🫢🫢 የራሳቸውን ምግብ ማዘጋጀት ምችሉ Example Plant)</p>
    <p>some Eubacteria make energy by chemical reaction called <b>Chemosynthesis</b></p>
    <p>And and Eubacteria energy miyagegnut be chemosynthesis nw</p>
    <p>Eubacteria live in most habitats,<b>Except</b> the most extreme</p>
    <p>Eubacteria be abizagnwu bota ygegnalu ke mokat bota besiteker</p>
    <h3>Type of bacteria and their shape</h3>
    <ul>
    <li><b>Cocci :- Spherical(ክብ) shape</b></li>
    <li><b> Bacilli :- Rod(መንገድ) shape</b></li>
    <li><b> Spirillum:- Spiral shape</b></li>
    </ul>
    <P><b>Archae bacteria</b> - have different cell wall than bacteria(Eubacteria)</p>
    <p>Archea make their own food</p>
    <p>They are chemosynthesis and photosynthesis</p>
    <p>Archea live in extreme(በጣም ሙቀት) environment</p>
    <p>The environment which the archea live often(ብዙ ግዜ) have no oxygen</p>
    <p>Bizu gize archea yeminorewu oxygen belelebet bota nw</p>
    <h2>There are two ways bacteria disease harm people</h2>
    <p>Be hulet mengeb nw bacteria ye sewu lijin migodawu</p>
    <p><b>1. The growth of bacteria can interface with the normal function of body tissues</b></p>
    <p><b>2. The bacteria can release(meliqeq) a toxic(merzama) that directly attack(maxiqat) the host</b></p>
    <p><b>Kelay yalutn hulet negeroch shemidid</b></p>
    <h2>Chracteris(ባህር) of Monera</h2>
    <p><b>1. They are prokaryotic unicellular organisms</b></p>
    <p><b>2. lack(የላቸውም) nucleus or any membrane bound organelles</b></p>
    <p><b>3. Most have arigid(በጣም ጠንካራ) cell wall</b></p>
    <p><b>4. Autotrophs and heterotrophs</b></p>
    <p><b>5. Known as decomposers</b></p>
    <h1> Ke beza Endat resa Est yetemarnewun quiz</h1>
    <button onclick="bq2()">quiz</button>
    
 
`;
}
