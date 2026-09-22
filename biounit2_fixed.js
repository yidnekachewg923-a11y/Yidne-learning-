function Bunit2(){
  document.body.innerHTML=`
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
        <h1>እንዳይ በዛ እስካሁን በተማርከው ላይ quiz ልፈትንክ እና መልሱን  ስትጫን ትክክል ውይም ትክክል እንዳልሆንክ እዛው ይነግርካል እና ከመመለስህ በፈት በደንብ አሰላስል</h1>
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
    <h1>Relevance of classification</h1>
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
    <li> The second name represents <b>Species</b> - ሁለተኛ ስሙ የምያመለክተው Species ነው</li>
    </ol>
    <h1> ስለዝህ የ አንድ organism ስም ስንጺፊ Genus + species ነው</h1>
    <p>In writing scientific name the first letter of the name of the genus is capitalized letter</p>
    <p> scientific name sinitsif Ye genus name ye mejemerya fidel capital mehon alebet</p>
    <p> ye species name be small ne minjemrewum minchersewum</p>
    <p><b>Example</b> Ye human being scientific name <b>Homo sapiens</b> Nw</p>
    <p><b>Homo - genus name የመጀመርያ ፊደል Capital nw</b></p>
    <p><b>sapiens - species name ሙሉው small ነው</b></p>
    <p>Scientific name be eji sitsaf ketach masimer alebn</p>
    <p><b>Dichotomous keys</b> are used to identify(መለየት) unfamiliar (ማይመሳሰሉ) organisms</p>
    <p><b>Poikilothermic</b> - cold blooded</p>
    <p><b>Homeothermic</b> - warm blooded</p>
    <h2>What is kingdom?(kingdom sound aydelem😂😂)</h2>
    <p>Kingdom is the largest taxon astwosk ke tilku wode tinsh sinikefafil</p>
    <h2>There are five kingdoms namely:-</h2>
    <ol>
    <li>
    <b>Monera(bacteria)</b></li>
    <li><b>Protista</b></li>
    <li><b>Plantae</b></li>
    <li><b>Fungi</b></li>
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
    <p><b>Archae bacteria</b> - have different cell wall than bacteria(Eubacteria)</p>
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
function bq2(){
    document.body.innerHTML=`
    <h2>Quiz: Characteristics and Classification of Organisms</h2>

<h3>1. Who is known as the father of taxonomy?</h3>

<input type="radio" name="q1" onclick="checkQ2_1('A')">
A. Charles Darwin<br>

<input type="radio" name="q1" onclick="checkQ2_1('B')">
B. Carolus Linnaeus<br>

<input type="radio" name="q1" onclick="checkQ2_1('C')">
C. Gregor Mendel<br>

<input type="radio" name="q1" onclick="checkQ2_1('D')">
D. Aristotle<br>

<p id="answer1"></p>


<h3>2. What did Carolus Linnaeus introduce?</h3>

<input type="radio" name="q2" onclick="checkQ2_2('A')">
A. Cell theory<br>

<input type="radio" name="q2" onclick="checkQ2_2('B')">
B. Taxonomic hierarchy of classification<br>

<input type="radio" name="q2" onclick="checkQ2_2('C')">
C. Theory of evolution<br>

<input type="radio" name="q2" onclick="checkQ2_2('D')">
D. DNA structure<br>

<p id="answer2"></p>


<h3>3. What is taxonomic hierarchy?</h3>

<input type="radio" name="q3" onclick="checkQ2_3('A')">
A. Arranging organisms into successive levels of classification<br>

<input type="radio" name="q3" onclick="checkQ2_3('B')">
B. Making organisms reproduce<br>

<input type="radio" name="q3" onclick="checkQ2_3('C')">
C. Studying only bacteria<br>

<input type="radio" name="q3" onclick="checkQ2_3('D')">
D. Changing the shape of organisms<br>

<p id="answer3"></p>


<h3>4. Which is the correct taxonomic hierarchy from largest to smallest?</h3>

<input type="radio" name="q4" onclick="checkQ2_4('A')">
A. Species - Genus - Family - Order - Class - Phylum - Kingdom<br>

<input type="radio" name="q4" onclick="checkQ2_4('B')">
B. Kingdom - Phylum - Class - Order - Family - Genus - Species<br>

<input type="radio" name="q4" onclick="checkQ2_4('C')">
C. Kingdom - Class - Phylum - Family - Genus - Order - Species<br>

<input type="radio" name="q4" onclick="checkQ2_4('D')">
D. Genus - Species - Family - Order - Kingdom - Class - Phylum<br>

<p id="answer4"></p>


<h3>5. What are eukaryotic cells?</h3>

<input type="radio" name="q5" onclick="checkQ2_5('A')">
A. Cells without a nucleus<br>

<input type="radio" name="q5" onclick="checkQ2_5('B')">
B. Cells with a nucleus and membrane-bound organelles<br>

<input type="radio" name="q5" onclick="checkQ2_5('C')">
C. Only bacterial cells<br>

<input type="radio" name="q5" onclick="checkQ2_5('D')">
D. Cells without DNA<br>

<p id="answer5"></p>


<h3>6. What is a characteristic of prokaryotic cells?</h3>

<input type="radio" name="q6" onclick="checkQ2_6('A')">
A. They have a nucleus<br>

<input type="radio" name="q6" onclick="checkQ2_6('B')">
B. They have many membrane-bound organelles<br>

<input type="radio" name="q6" onclick="checkQ2_6('C')">
C. They do not have a nucleus<br>

<input type="radio" name="q6" onclick="checkQ2_6('D')">
D. They are always multicellular<br>

<p id="answer6"></p>


<h3>7. What is a species?</h3>

<input type="radio" name="q7" onclick="checkQ2_7('A')">
A. The largest taxon<br>

<input type="radio" name="q7" onclick="checkQ2_7('B')">
B. A group of organisms that can reproduce and produce fertile offspring<br>

<input type="radio" name="q7" onclick="checkQ2_7('C')">
C. A type of cell<br>

<input type="radio" name="q7" onclick="checkQ2_7('D')">
D. A type of bacteria<br>

<p id="answer7"></p>


<h3>8. Which is an application of classification?</h3>

<input type="radio" name="q8" onclick="checkQ2_8('A')">
A. Identifying harmful and beneficial organisms<br>

<input type="radio" name="q8" onclick="checkQ2_8('B')">
B. Increasing the size of organisms<br>

<input type="radio" name="q8" onclick="checkQ2_8('C')">
C. Changing organisms into bacteria<br>

<input type="radio" name="q8" onclick="checkQ2_8('D')">
D. Removing all organisms<br>

<p id="answer8"></p>


<h3>9. How does classification help when studying organisms?</h3>

<input type="radio" name="q9" onclick="checkQ2_9('A')">
A. It increases the time needed for study<br>

<input type="radio" name="q9" onclick="checkQ2_9('B')">
B. It reduces energy and time needed to study organisms<br>

<input type="radio" name="q9" onclick="checkQ2_9('C')">
C. It removes organisms<br>

<input type="radio" name="q9" onclick="checkQ2_9('D')">
D. It stops organisms from reproducing<br>

<p id="answer9"></p>


<h3>10. Classification helps us understand the ______ between organisms.</h3>

<input type="radio" name="q10" onclick="checkQ2_10('A')">
A. Temperature<br>

<input type="radio" name="q10" onclick="checkQ2_10('B')">
B. Relationship<br>

<input type="radio" name="q10" onclick="checkQ2_10('C')">
C. Weight<br>

<input type="radio" name="q10" onclick="checkQ2_10('D')">
D. Color<br>

<p id="answer10"></p>


<h3>11. How many names are used in the scientific name of an organism?</h3>

<input type="radio" name="q11" onclick="checkQ2_11('A')">
A. One<br>

<input type="radio" name="q11" onclick="checkQ2_11('B')">
B. Two<br>

<input type="radio" name="q11" onclick="checkQ2_11('C')">
C. Three<br>

<input type="radio" name="q11" onclick="checkQ2_11('D')">
D. Four<br>

<p id="answer11"></p>


<h3>12. The first name in a scientific name represents the:</h3>

<input type="radio" name="q12" onclick="checkQ2_12('A')">
A. Species<br>

<input type="radio" name="q12" onclick="checkQ2_12('B')">
B. Family<br>

<input type="radio" name="q12" onclick="checkQ2_12('C')">
C. Genus<br>

<input type="radio" name="q12" onclick="checkQ2_12('D')">
D. Kingdom<br>

<p id="answer12"></p>


<h3>13. The second name in a scientific name represents the:</h3>

<input type="radio" name="q13" onclick="checkQ2_13('A')">
A. Species<br>

<input type="radio" name="q13" onclick="checkQ2_13('B')">
B. Genus<br>

<input type="radio" name="q13" onclick="checkQ2_13('C')">
C. Family<br>

<input type="radio" name="q13" onclick="checkQ2_13('D')">
D. Class<br>

<p id="answer13"></p>


<h3>14. Which part of a scientific name begins with a capital letter?</h3>

<input type="radio" name="q14" onclick="checkQ2_14('A')">
A. The species name<br>

<input type="radio" name="q14" onclick="checkQ2_14('B')">
B. The genus name<br>

<input type="radio" name="q14" onclick="checkQ2_14('C')">
C. Both names<br>

<input type="radio" name="q14" onclick="checkQ2_14('D')">
D. Neither name<br>

<p id="answer14"></p>


<h3>15. What is the scientific name of a human being?</h3>

<input type="radio" name="q15" onclick="checkQ2_15('A')">
A. Homo sapiens<br>

<input type="radio" name="q15" onclick="checkQ2_15('B')">
B. Sapiens Homo<br>

<input type="radio" name="q15" onclick="checkQ2_15('C')">
C. Homo human<br>

<input type="radio" name="q15" onclick="checkQ2_15('D')">
D. Animalia sapiens<br>

<p id="answer15"></p>


<h3>16. What are dichotomous keys used for?</h3>

<input type="radio" name="q16" onclick="checkQ2_16('A')">
A. Producing food<br>

<input type="radio" name="q16" onclick="checkQ2_16('B')">
B. Identifying unfamiliar organisms<br>

<input type="radio" name="q16" onclick="checkQ2_16('C')">
C. Making energy<br>

<input type="radio" name="q16" onclick="checkQ2_16('D')">
D. Measuring temperature<br>

<p id="answer16"></p>


<h3>17. What does Poikilothermic mean?</h3>

<input type="radio" name="q17" onclick="checkQ2_17('A')">
A. Warm-blooded<br>

<input type="radio" name="q17" onclick="checkQ2_17('B')">
B. Cold-blooded<br>

<input type="radio" name="q17" onclick="checkQ2_17('C')">
C. Single-celled<br>

<input type="radio" name="q17" onclick="checkQ2_17('D')">
D. Multicellular<br>

<p id="answer17"></p>


<h3>18. What does Homeothermic mean?</h3>

<input type="radio" name="q18" onclick="checkQ2_18('A')">
A. Cold-blooded<br>

<input type="radio" name="q18" onclick="checkQ2_18('B')">
B. Warm-blooded<br>

<input type="radio" name="q18" onclick="checkQ2_18('C')">
C. Without a nucleus<br>

<input type="radio" name="q18" onclick="checkQ2_18('D')">
D. Without a cell wall<br>

<p id="answer18"></p>


<h3>19. Which is the largest taxon?</h3>

<input type="radio" name="q19" onclick="checkQ2_19('A')">
A. Species<br>

<input type="radio" name="q19" onclick="checkQ2_19('B')">
B. Genus<br>

<input type="radio" name="q19" onclick="checkQ2_19('C')">
C. Kingdom<br>

<input type="radio" name="q19" onclick="checkQ2_19('D')">
D. Family<br>

<p id="answer19"></p>


<h3>20. Which of the following is a kingdom?</h3>

<input type="radio" name="q20" onclick="checkQ2_20('A')">
A. Cocci<br>

<input type="radio" name="q20" onclick="checkQ2_20('B')">
B. Bacilli<br>

<input type="radio" name="q20" onclick="checkQ2_20('C')">
C. Monera<br>

<input type="radio" name="q20" onclick="checkQ2_20('D')">
D. Spirillum<br>

<p id="answer20"></p>


<h3>21. What does Kingdom Monera include?</h3>

<input type="radio" name="q21" onclick="checkQ2_21('A')">
A. Plants and animals<br>

<input type="radio" name="q21" onclick="checkQ2_21('B')">
B. Eubacteria and archaebacteria<br>

<input type="radio" name="q21" onclick="checkQ2_21('C')">
C. Fungi and plants<br>

<input type="radio" name="q21" onclick="checkQ2_21('D')">
D. Only animals<br>

<p id="answer21"></p>


<h3>22. Which type of bacteria has a spherical shape?</h3>

<input type="radio" name="q22" onclick="checkQ2_22('A')">
A. Bacilli<br>

<input type="radio" name="q22" onclick="checkQ2_22('B')">
B. Spirillum<br>

<input type="radio" name="q22" onclick="checkQ2_22('C')">
C. Cocci<br>

<input type="radio" name="q22" onclick="checkQ2_22('D')">
D. Archaea<br>

<p id="answer22"></p>


<h3>23. Which type of bacteria has a rod shape?</h3>

<input type="radio" name="q23" onclick="checkQ2_23('A')">
A. Cocci<br>

<input type="radio" name="q23" onclick="checkQ2_23('B')">
B. Bacilli<br>

<input type="radio" name="q23" onclick="checkQ2_23('C')">
C. Spirillum<br>

<input type="radio" name="q23" onclick="checkQ2_23('D')">
D. Archaea<br>

<p id="answer23"></p>


<h3>24. Which type of bacteria has a spiral shape?</h3>

<input type="radio" name="q24" onclick="checkQ2_24('A')">
A. Cocci<br>

<input type="radio" name="q24" onclick="checkQ2_24('B')">
B. Bacilli<br>

<input type="radio" name="q24" onclick="checkQ2_24('C')">
C. Spirillum<br>

<input type="radio" name="q24" onclick="checkQ2_24('D')">
D. Eubacteria<br>

<p id="answer24"></p>


<h3>25. Where do archaebacteria often live?</h3>

<input type="radio" name="q25" onclick="checkQ2_25('A')">
A. Only in plants<br>

<input type="radio" name="q25" onclick="checkQ2_25('B')">
B. In extreme environments<br>

<input type="radio" name="q25" onclick="checkQ2_25('C')">
C. Only in human blood<br>

<input type="radio" name="q25" onclick="checkQ2_25('D')">
D. Only in fresh water<br>

<p id="answer25"></p>
<button onclick="bu1p3()">Next lesson</button>
    `;
}
function checkQ2_1(answer) {
    if (answer === "B") {
        document.getElementById("answer1").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Carolus Linnaeus is known as the father of taxonomy.";
    } else {
        document.getElementById("answer1").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Carolus Linnaeus</b><br>" +
        "<b>Explanation:</b> Carolus Linnaeus is known as the father of taxonomy.";
    }
}


function checkQ2_2(answer) {
    if (answer === "B") {
        document.getElementById("answer2").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Taxonomy is the science of naming, identifying, and classifying organisms.";
    } else {
        document.getElementById("answer2").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Taxonomy</b><br>" +
        "<b>Explanation:</b> Taxonomy is the science of naming, identifying, and classifying organisms.";
    }
}


function checkQ2_3(answer) {
    if (answer === "C") {
        document.getElementById("answer3").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> The taxonomic hierarchy is Kingdom, Phylum, Class, Order, Family, Genus, and Species.";
    } else {
        document.getElementById("answer3").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Kingdom → Phylum → Class → Order → Family → Genus → Species</b><br>" +
        "<b>Explanation:</b> This is the taxonomic hierarchy from the largest to the smallest major taxonomic rank.";
    }
}


function checkQ2_4(answer) {
    if (answer === "B") {
        document.getElementById("answer4").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Eukaryotic cells have a nucleus and membrane-bound organelles.";
    } else {
        document.getElementById("answer4").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. They have a nucleus and membrane-bound organelles</b><br>" +
        "<b>Explanation:</b> Eukaryotic cells contain a nucleus and membrane-bound organelles.";
    }
}


function checkQ2_5(answer) {
    if (answer === "A") {
        document.getElementById("answer5").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Prokaryotic cells do not have a true nucleus.";
    } else {
        document.getElementById("answer5").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. They do not have a true nucleus</b><br>" +
        "<b>Explanation:</b> Prokaryotic cells do not have a membrane-bound nucleus.";
    }
}


function checkQ2_6(answer) {
    if (answer === "B") {
        document.getElementById("answer6").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> A species is a group of organisms that can reproduce and produce fertile offspring.";
    } else {
        document.getElementById("answer6").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Organisms that can reproduce and produce fertile offspring</b><br>" +
        "<b>Explanation:</b> Members of the same species can reproduce and produce fertile offspring.";
    }
}


function checkQ2_7(answer) {
    if (answer === "C") {
        document.getElementById("answer7").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Classification helps us understand relationships between organisms.";
    } else {
        document.getElementById("answer7").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. To understand relationships between organisms</b><br>" +
        "<b>Explanation:</b> Classification helps scientists understand relationships among organisms.";
    }
}


function checkQ2_8(answer) {
    if (answer === "A") {
        document.getElementById("answer8").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Classification makes it easier to identify harmful and beneficial organisms.";
    } else {
        document.getElementById("answer8").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Identify harmful and beneficial organisms</b><br>" +
        "<b>Explanation:</b> Classification helps us identify organisms and understand their importance.";
    }
}


function checkQ2_9(answer) {
    if (answer === "B") {
        document.getElementById("answer9").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> In binomial nomenclature, the first name represents the genus.";
    } else {
        document.getElementById("answer9").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Genus</b><br>" +
        "<b>Explanation:</b> The first name in a scientific name is the genus name.";
    }
}


function checkQ2_10(answer) {
    if (answer === "C") {
        document.getElementById("answer10").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> In Homo sapiens, Homo is the genus and sapiens is the species name.";
    } else {
        document.getElementById("answer10").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Homo sapiens</b><br>" +
        "<b>Explanation:</b> Homo is the genus and sapiens is the species name.";
    }
}


function checkQ2_11(answer) {
    if (answer === "B") {
        document.getElementById("answer11").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> The genus name begins with a capital letter and the species name begins with a lowercase letter.";
    } else {
        document.getElementById("answer11").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Genus starts with a capital letter</b><br>" +
        "<b>Explanation:</b> In scientific names, the genus starts with a capital letter and the species starts with a lowercase letter.";
    }
}


function checkQ2_12(answer) {
    if (answer === "A") {
        document.getElementById("answer12").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> The second name in a scientific name represents the species name.";
    } else {
        document.getElementById("answer12").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Species</b><br>" +
        "<b>Explanation:</b> The second part of a scientific name is the species name.";
    }
}


function checkQ2_13(answer) {
    if (answer === "C") {
        document.getElementById("answer13").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Scientific names help scientists around the world use the same name for an organism.";
    } else {
        document.getElementById("answer13").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. To give organisms a universal scientific name</b><br>" +
        "<b>Explanation:</b> Scientific naming provides a common system for identifying organisms worldwide.";
    }
}


function checkQ2_14(answer) {
    if (answer === "B") {
        document.getElementById("answer14").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Classification reduces the time and energy needed to study and identify organisms.";
    } else {
        document.getElementById("answer14").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. It reduces time and energy</b><br>" +
        "<b>Explanation:</b> Classification organizes organisms, making them easier to study and identify.";
    }
}


function checkQ2_15(answer) {
    if (answer === "A") {
        document.getElementById("answer15").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Classification helps us understand the relationships among different organisms.";
    } else {
        document.getElementById("answer15").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Understand relationships between organisms</b><br>" +
        "<b>Explanation:</b> Classification shows how organisms are related to one another.";
    }
}


function checkQ2_16(answer) {
    if (answer === "B") {
        document.getElementById("answer16").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Dichotomous keys are used to identify unfamiliar organisms.";
    } else {
        document.getElementById("answer16").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Identifying unfamiliar organisms</b><br>" +
        "<b>Explanation:</b> Dichotomous keys help us identify organisms by using a series of choices.";
    }
}


function checkQ2_17(answer) {
    if (answer === "B") {
        document.getElementById("answer17").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Poikilothermic animals are commonly called cold-blooded animals.";
    } else {
        document.getElementById("answer17").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Cold-blooded</b><br>" +
        "<b>Explanation:</b> Poikilothermic animals cannot maintain a constant body temperature internally.";
    }
}


function checkQ2_18(answer) {
    if (answer === "B") {
        document.getElementById("answer18").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Homeothermic animals are commonly called warm-blooded animals.";
    } else {
        document.getElementById("answer18").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Warm-blooded</b><br>" +
        "<b>Explanation:</b> Homeothermic animals maintain a relatively constant body temperature.";
    }
}


function checkQ2_19(answer) {
    if (answer === "C") {
        document.getElementById("answer19").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Kingdom is the largest taxonomic rank in the hierarchy listed here.";
    } else {
        document.getElementById("answer19").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Kingdom</b><br>" +
        "<b>Explanation:</b> Kingdom contains many organisms and is the largest taxon in this hierarchy.";
    }
}


function checkQ2_20(answer) {
    if (answer === "C") {
        document.getElementById("answer20").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Monera is a kingdom that contains prokaryotic organisms.";
    } else {
        document.getElementById("answer20").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Monera</b><br>" +
        "<b>Explanation:</b> Monera contains prokaryotic organisms such as bacteria.";
    }
}


function checkQ2_21(answer) {
    if (answer === "B") {
        document.getElementById("answer21").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Monera includes Eubacteria and archaebacteria.";
    } else {
        document.getElementById("answer21").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Eubacteria and archaebacteria</b><br>" +
        "<b>Explanation:</b> The Monera group includes Eubacteria and archaebacteria.";
    }
}


function checkQ2_22(answer) {
    if (answer === "C") {
        document.getElementById("answer22").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Cocci are bacteria with a spherical or round shape.";
    } else {
        document.getElementById("answer22").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Cocci</b><br>" +
        "<b>Explanation:</b> Cocci are spherical-shaped bacteria.";
    }
}


function checkQ2_23(answer) {
    if (answer === "B") {
        document.getElementById("answer23").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Bacilli are rod-shaped bacteria.";
    } else {
        document.getElementById("answer23").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Bacilli</b><br>" +
        "<b>Explanation:</b> Bacilli have a rod-like shape.";
    }
}


function checkQ2_24(answer) {
    if (answer === "C") {
        document.getElementById("answer24").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Spirillum are spiral-shaped bacteria.";
    } else {
        document.getElementById("answer24").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Spirillum</b><br>" +
        "<b>Explanation:</b> Spirillum bacteria have a spiral shape.";
    }
}


function checkQ2_25(answer) {
    if (answer === "B") {
        document.getElementById("answer25").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Archaebacteria commonly live in extreme environments.";
    } else {
        document.getElementById("answer25").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. In extreme environments</b><br>" +
        "<b>Explanation:</b> Many archaebacteria live in extreme environments such as places with high temperature, high salt, or little oxygen.";
    }
}
function bu1p3(){
    document.body.innerHTML=`
    <h1>Kingdom Protista</h1>
    <p>Most diverse organism of all the kingdom</p>
    <p>Ke hulum kingdom betam bebizat migegnut protista nachewu</p>
    <p>There are single celled(unicellular) and multi cellular</p>
    <p>Some can make their own food,some can not make their own food</p>
    <p><b>They all are Eukaryotes</b></p>
    <h2>Example</h2>
    <h3>1.protozoans - like ende animal nw gn and cell bicha nw yalewu</h3>
    <h3>2.Algae - like ende plant nw gn root,stems,and leaves yelewum</h3>
    <p>Algae are photosynthesis and autotrophic</p>
    <h1>Examples of protista</h1>
    <ol>
    <li><b>Paramecium - used Cilia For movement</b></li>
    <li><b> Amoeba - used Pseudopoda for movement</b></li>
    <li><b>Euglena - used Flagellum for movement</b></li>
    </ol>
    <h1>Kingdom Fungi</h1>
    <p>Fungi are Eukaryotic organisms Examples Moulds and Mushrooms</p>
    <p>Unicellular fungi example Yeast, Multicellular fungi Moulds and mushrooms</p>
    <p>Their body consist of long, slender thread -like structure called <b>Hyphae</b></p>
    <p>Hyphae play an important role in how they obtain food</p>
    <p>Ye hyphae tikimu migib lemagignet nw</p>
    <p>Fungi cell wall made up of <b> Chitin and Polysaccharide</b></p>
    <p>Ye fung cell wall yetegenebawu ke chitin ena ke polysaccharide nw</p>
    <p><b>Saprophytes</b> get get food from dead(kemotu) substance</p>
    <p>Endatresa saprophyte ye fungi examples nw</p>
    <p><b>Decomposer Fungi</b> get food from break down and absorb from non living organics material</p>
    <p>Fungi can not make their own food therefore(selezh) they are Heterotrophs</p>
    <p>Fungi uses a procces called <b> Extracellular digetion</b> to obtain nutrients</p>
    <p>Fungi yerasachewun migib mazegajet aychlum silez migeb lemagignet extracellular digestion mibalewun hidet nw miyaregut</p>
    <p>fungi can live with as <b>Parasites(xigegna) or mulualists(xiqimegna)</b></p>
    <p>Parasite fungi absorb nutrients from the cell of living hosts</p>
    <p>Parasite fungi nutrient miyagegnut beza keminorubet living things nw ahun lemisale sewu wust minor kehone ke sewu living cell nw nutrient miyagegnut</p>
    <p><b>Mutualistic fungi</b> also absorb nutrients from host organisms,but they also benefit the host so both(huletum) are benefitial</p>
    <p>Mutualistic fungi mibalut ahunm nutrients miyagegnut ke minorubet organism nw gn huletum oarganismum fungiwum tetekaminachewu</p>
    <p>Gn parasite fungi lay fungi bicha nw tetekami organisimu minim tikim ayagegnem Hasabu gebtokal haa 😂😂</p>
    <p> Fungi can also live as symbionts</p>
    <p>Symbionts malet and lay malet</p>
    <p><b>Fungi ena green algae and lay sihonu</b> - symbiosisu <b>Lichens</b> Mibalewu</p>
    <p><b>Fungi ena plant root and lay sihonu</b> - symbiosisu <b>Mycorrhizae</b> Mibalewu</p>
    <p><b>1.Mutualism</b> is the symbiotic relationship in which both(huletum) species benefit(tetekam)</p>
    <p><b>2. Parasitism</b> is the symbiotic relationship in which one organisms benefits at expense of other</p>
    <p>Parasitism malet andu andu aly bemedegef tetekami mihonbet menged nw andu bicha nw tetekami mihonewu</p>
    <p><b>Symbiosis</b> is permanent(maykoarexi) close relationship between two or more organisms</p>
    <p><b>Yeast</b> is very important fungus used to making injera rise,and allows us(legna) to make alcohol(tej,tella,beer)</p>
    <button onclick="bq3()">quiz</button>
    `;
}
function bq3(){
    document.body.innerHTML=`
    <h2>Quiz: Kingdom Protista and Kingdom Fungi</h2>

<h3>1. Which kingdom is described as one of the most diverse kingdoms?</h3>

<input type="radio" name="q1" onclick="checkQ3_1('A')">
A. Kingdom Monera<br>

<input type="radio" name="q1" onclick="checkQ3_1('B')">
B. Kingdom Protista<br>

<input type="radio" name="q1" onclick="checkQ3_1('C')">
C. Kingdom Fungi<br>

<input type="radio" name="q1" onclick="checkQ3_1('D')">
D. Kingdom Plantae<br>

<p id="answer1"></p>


<h3>2. Are all organisms in Kingdom Protista eukaryotes?</h3>

<input type="radio" name="q2" onclick="checkQ3_2('A')">
A. Yes<br>

<input type="radio" name="q2" onclick="checkQ3_2('B')">
B. No<br>

<input type="radio" name="q2" onclick="checkQ3_2('C')">
C. Only algae<br>

<input type="radio" name="q2" onclick="checkQ3_2('D')">
D. Only protozoans<br>

<p id="answer2"></p>


<h3>3. Which of the following can be found in Kingdom Protista?</h3>

<input type="radio" name="q3" onclick="checkQ3_3('A')">
A. Only unicellular organisms<br>

<input type="radio" name="q3" onclick="checkQ3_3('B')">
B. Only multicellular organisms<br>

<input type="radio" name="q3" onclick="checkQ3_3('C')">
C. Both unicellular and multicellular organisms<br>

<input type="radio" name="q3" onclick="checkQ3_3('D')">
D. Neither<br>

<p id="answer3"></p>


<h3>4. Which of the following is an example of a protozoan?</h3>

<input type="radio" name="q4" onclick="checkQ3_4('A')">
A. Paramecium<br>

<input type="radio" name="q4" onclick="checkQ3_4('B')">
B. Mushroom<br>

<input type="radio" name="q4" onclick="checkQ3_4('C')">
C. Yeast<br>

<input type="radio" name="q4" onclick="checkQ3_4('D')">
D. Mould<br>

<p id="answer4"></p>


<h3>5. Protozoans are similar to animals because they are generally:</h3>

<input type="radio" name="q5" onclick="checkQ3_5('A')">
A. Like animals<br>

<input type="radio" name="q5" onclick="checkQ3_5('B')">
B. Like plants<br>

<input type="radio" name="q5" onclick="checkQ3_5('C')">
C. Like fungi<br>

<input type="radio" name="q5" onclick="checkQ3_5('D')">
D. Like bacteria<br>

<p id="answer5"></p>


<h3>6. Algae are similar to plants because they:</h3>

<input type="radio" name="q6" onclick="checkQ3_6('A')">
A. Have roots, stems and leaves<br>

<input type="radio" name="q6" onclick="checkQ3_6('B')">
B. Perform photosynthesis<br>

<input type="radio" name="q6" onclick="checkQ3_6('C')">
C. Are fungi<br>

<input type="radio" name="q6" onclick="checkQ3_6('D')">
D. Are parasites<br>

<p id="answer6"></p>


<h3>7. Algae are:</h3>

<input type="radio" name="q7" onclick="checkQ3_7('A')">
A. Heterotrophic<br>

<input type="radio" name="q7" onclick="checkQ3_7('B')">
B. Autotrophic<br>

<input type="radio" name="q7" onclick="checkQ3_7('C')">
C. Parasitic only<br>

<input type="radio" name="q7" onclick="checkQ3_7('D')">
D. Decomposers only<br>

<p id="answer7"></p>


<h3>8. Which organism uses cilia for movement?</h3>

<input type="radio" name="q8" onclick="checkQ3_8('A')">
A. Amoeba<br>

<input type="radio" name="q8" onclick="checkQ3_8('B')">
B. Euglena<br>

<input type="radio" name="q8" onclick="checkQ3_8('C')">
C. Paramecium<br>

<input type="radio" name="q8" onclick="checkQ3_8('D')">
D. Yeast<br>

<p id="answer8"></p>


<h3>9. Which organism uses pseudopodia for movement?</h3>

<input type="radio" name="q9" onclick="checkQ3_9('A')">
A. Paramecium<br>

<input type="radio" name="q9" onclick="checkQ3_9('B')">
B. Amoeba<br>

<input type="radio" name="q9" onclick="checkQ3_9('C')">
C. Euglena<br>

<input type="radio" name="q9" onclick="checkQ3_9('D')">
D. Mushroom<br>

<p id="answer9"></p>


<h3>10. Which organism uses a flagellum for movement?</h3>

<input type="radio" name="q10" onclick="checkQ3_10('A')">
A. Amoeba<br>

<input type="radio" name="q10" onclick="checkQ3_10('B')">
B. Paramecium<br>

<input type="radio" name="q10" onclick="checkQ3_10('C')">
C. Euglena<br>

<input type="radio" name="q10" onclick="checkQ3_10('D')">
D. Mould<br>

<p id="answer10"></p>


<h3>11. Fungi are:</h3>

<input type="radio" name="q11" onclick="checkQ3_11('A')">
A. Prokaryotic organisms<br>

<input type="radio" name="q11" onclick="checkQ3_11('B')">
B. Eukaryotic organisms<br>

<input type="radio" name="q11" onclick="checkQ3_11('C')">
C. Viruses<br>

<input type="radio" name="q11" onclick="checkQ3_11('D')">
D. Bacteria<br>

<p id="answer11"></p>


<h3>12. Which of the following is an example of a unicellular fungus?</h3>

<input type="radio" name="q12" onclick="checkQ3_12('A')">
A. Mushroom<br>

<input type="radio" name="q12" onclick="checkQ3_12('B')">
B. Mould<br>

<input type="radio" name="q12" onclick="checkQ3_12('C')">
C. Yeast<br>

<input type="radio" name="q12" onclick="checkQ3_12('D')">
D. Algae<br>

<p id="answer12"></p>


<h3>13. Which of the following are examples of multicellular fungi?</h3>

<input type="radio" name="q13" onclick="checkQ3_13('A')">
A. Yeast only<br>

<input type="radio" name="q13" onclick="checkQ3_13('B')">
B. Moulds and mushrooms<br>

<input type="radio" name="q13" onclick="checkQ3_13('C')">
C. Amoeba and Euglena<br>

<input type="radio" name="q13" onclick="checkQ3_13('D')">
D. Paramecium and Amoeba<br>

<p id="answer13"></p>


<h3>14. What is the long, slender, thread-like structure of fungi called?</h3>

<input type="radio" name="q14" onclick="checkQ3_14('A')">
A. Cilia<br>

<input type="radio" name="q14" onclick="checkQ3_14('B')">
B. Hyphae<br>

<input type="radio" name="q14" onclick="checkQ3_14('C')">
C. Flagellum<br>

<input type="radio" name="q14" onclick="checkQ3_14('D')">
D. Pseudopodia<br>

<p id="answer14"></p>


<h3>15. What is an important role of hyphae?</h3>

<input type="radio" name="q15" onclick="checkQ3_15('A')">
A. They help fungi obtain food<br>

<input type="radio" name="q15" onclick="checkQ3_15('B')">
B. They help fungi make seeds<br>

<input type="radio" name="q15" onclick="checkQ3_15('C')">
C. They make fungi animals<br>

<input type="radio" name="q15" onclick="checkQ3_15('D')">
D. They give fungi roots<br>

<p id="answer15"></p>


<h3>16. What is the fungal cell wall made up of?</h3>

<input type="radio" name="q16" onclick="checkQ3_16('A')">
A. Cellulose only<br>

<input type="radio" name="q16" onclick="checkQ3_16('B')">
B. Chitin and polysaccharide<br>

<input type="radio" name="q16" onclick="checkQ3_16('C')">
C. Protein only<br>

<input type="radio" name="q16" onclick="checkQ3_16('D')">
D. Lipids only<br>

<p id="answer16"></p>


<h3>17. What are saprophytes?</h3>

<input type="radio" name="q17" onclick="checkQ3_17('A')">
A. Organisms that get food from dead substances<br>

<input type="radio" name="q17" onclick="checkQ3_17('B')">
B. Organisms that make their own food<br>

<input type="radio" name="q17" onclick="checkQ3_17('C')">
C. Organisms that eat only living animals<br>

<input type="radio" name="q17" onclick="checkQ3_17('D')">
D. Organisms that perform photosynthesis<br>

<p id="answer17"></p>


<h3>18. Why are fungi called heterotrophs?</h3>

<input type="radio" name="q18" onclick="checkQ3_18('A')">
A. Because they make their own food<br>

<input type="radio" name="q18" onclick="checkQ3_18('B')">
B. Because they cannot make their own food<br>

<input type="radio" name="q18" onclick="checkQ3_18('C')">
C. Because they are plants<br>

<input type="radio" name="q18" onclick="checkQ3_18('D')">
D. Because they are bacteria<br>

<p id="answer18"></p>


<h3>19. What process do fungi use to obtain nutrients?</h3>

<input type="radio" name="q19" onclick="checkQ3_19('A')">
A. Photosynthesis<br>

<input type="radio" name="q19" onclick="checkQ3_19('B')">
B. Extracellular digestion<br>

<input type="radio" name="q19" onclick="checkQ3_19('C')">
C. Respiration only<br>

<input type="radio" name="q19" onclick="checkQ3_19('D')">
D. Internal digestion only<br>

<p id="answer19"></p>


<h3>20. What do parasite fungi absorb nutrients from?</h3>

<input type="radio" name="q20" onclick="checkQ3_20('A')">
A. Dead substances only<br>

<input type="radio" name="q20" onclick="checkQ3_20('B')">
B. Living hosts<br>

<input type="radio" name="q20" onclick="checkQ3_20('C')">
C. Sunlight<br>

<input type="radio" name="q20" onclick="checkQ3_20('D')">
D. Water only<br>

<p id="answer20"></p>


<h3>21. What happens in mutualism?</h3>

<input type="radio" name="q21" onclick="checkQ3_21('A')">
A. Both organisms benefit<br>

<input type="radio" name="q21" onclick="checkQ3_21('B')">
B. One organism benefits and the other is harmed<br>

<input type="radio" name="q21" onclick="checkQ3_21('C')">
C. Neither organism benefits<br>

<input type="radio" name="q21" onclick="checkQ3_21('D')">
D. Both organisms are harmed<br>

<p id="answer21"></p>


<h3>22. What is parasitism?</h3>

<input type="radio" name="q22" onclick="checkQ3_22('A')">
A. Both species benefit<br>

<input type="radio" name="q22" onclick="checkQ3_22('B')">
B. One organism benefits at the expense of the other<br>

<input type="radio" name="q22" onclick="checkQ3_22('C')">
C. Neither organism benefits<br>

<input type="radio" name="q22" onclick="checkQ3_22('D')">
D. Both organisms make their own food<br>

<p id="answer22"></p>


<h3>23. What is the symbiotic relationship between fungi and green algae called?</h3>

<input type="radio" name="q23" onclick="checkQ3_23('A')">
A. Mycorrhizae<br>

<input type="radio" name="q23" onclick="checkQ3_23('B')">
B. Lichens<br>

<input type="radio" name="q23" onclick="checkQ3_23('C')">
C. Hyphae<br>

<input type="radio" name="q23" onclick="checkQ3_23('D')">
D. Saprophytes<br>

<p id="answer23"></p>


<h3>24. What is the symbiotic relationship between fungi and plant roots called?</h3>

<input type="radio" name="q24" onclick="checkQ3_24('A')">
A. Lichens<br>

<input type="radio" name="q24" onclick="checkQ3_24('B')">
B. Mycorrhizae<br>

<input type="radio" name="q24" onclick="checkQ3_24('C')">
C. Parasitism<br>

<input type="radio" name="q24" onclick="checkQ3_24('D')">
D. Saprophytes<br>

<p id="answer24"></p>


<h3>25. What is yeast used for?</h3>

<input type="radio" name="q25" onclick="checkQ3_25('A')">
A. Making injera rise and making alcohol<br>

<input type="radio" name="q25" onclick="checkQ3_25('B')">
B. Making plant roots<br>

<input type="radio" name="q25" onclick="checkQ3_25('C')">
C. Making bacteria<br>

<input type="radio" name="q25" onclick="checkQ3_25('D')">
D. Making sunlight<br>

<p id="answer25"></p>
<button onclick="bu1p4()">Next lesson</button>
    `;
}
function checkQ3_1(answer) {
    if (answer === "B") {
        document.getElementById("answer1").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Kingdom Protista is one of the most diverse kingdoms.";
    } else {
        document.getElementById("answer1").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Kingdom Protista</b><br>" +
        "<b>Explanation:</b> Kingdom Protista is one of the most diverse kingdoms.";
    }
}


function checkQ3_2(answer) {
    if (answer === "A") {
        document.getElementById("answer2").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> All organisms in Kingdom Protista are eukaryotes.";
    } else {
        document.getElementById("answer2").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Yes</b><br>" +
        "<b>Explanation:</b> Protists are eukaryotic organisms.";
    }
}


function checkQ3_3(answer) {
    if (answer === "C") {
        document.getElementById("answer3").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Protista includes both unicellular and multicellular organisms.";
    } else {
        document.getElementById("answer3").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Both unicellular and multicellular organisms</b><br>" +
        "<b>Explanation:</b> Protists can be single-celled or multicellular.";
    }
}


function checkQ3_4(answer) {
    if (answer === "A") {
        document.getElementById("answer4").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Paramecium is an example of a protozoan.";
    } else {
        document.getElementById("answer4").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Paramecium</b><br>" +
        "<b>Explanation:</b> Paramecium is a protozoan found in Kingdom Protista.";
    }
}


function checkQ3_5(answer) {
    if (answer === "A") {
        document.getElementById("answer5").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Protozoans are animal-like protists.";
    } else {
        document.getElementById("answer5").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Like animals</b><br>" +
        "<b>Explanation:</b> Protozoans are described as being similar to animals.";
    }
}


function checkQ3_6(answer) {
    if (answer === "B") {
        document.getElementById("answer6").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Algae perform photosynthesis and are autotrophic.";
    } else {
        document.getElementById("answer6").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Perform photosynthesis</b><br>" +
        "<b>Explanation:</b> Algae are plant-like protists that perform photosynthesis.";
    }
}


function checkQ3_7(answer) {
    if (answer === "B") {
        document.getElementById("answer7").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Algae are autotrophic because they can make their own food by photosynthesis.";
    } else {
        document.getElementById("answer7").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Autotrophic</b><br>" +
        "<b>Explanation:</b> Algae can make their own food through photosynthesis.";
    }
}


function checkQ3_8(answer) {
    if (answer === "C") {
        document.getElementById("answer8").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Paramecium uses cilia for movement.";
    } else {
        document.getElementById("answer8").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Paramecium</b><br>" +
        "<b>Explanation:</b> Paramecium moves using many small hair-like structures called cilia.";
    }
}


function checkQ3_9(answer) {
    if (answer === "B") {
        document.getElementById("answer9").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Amoeba uses pseudopodia for movement.";
    } else {
        document.getElementById("answer9").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Amoeba</b><br>" +
        "<b>Explanation:</b> Amoeba moves by extending temporary structures called pseudopodia.";
    }
}


function checkQ3_10(answer) {
    if (answer === "C") {
        document.getElementById("answer10").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Euglena uses a flagellum for movement.";
    } else {
        document.getElementById("answer10").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Euglena</b><br>" +
        "<b>Explanation:</b> Euglena uses a flagellum to move.";
    }
}


function checkQ3_11(answer) {
    if (answer === "B") {
        document.getElementById("answer11").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Fungi are eukaryotic organisms.";
    } else {
        document.getElementById("answer11").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Eukaryotic organisms</b><br>" +
        "<b>Explanation:</b> Fungi have eukaryotic cells.";
    }
}


function checkQ3_12(answer) {
    if (answer === "C") {
        document.getElementById("answer12").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Yeast is an example of unicellular fungi.";
    } else {
        document.getElementById("answer12").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Yeast</b><br>" +
        "<b>Explanation:</b> Yeast is a unicellular fungus.";
    }
}


function checkQ3_13(answer) {
    if (answer === "B") {
        document.getElementById("answer13").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Moulds and mushrooms are examples of multicellular fungi.";
    } else {
        document.getElementById("answer13").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Moulds and mushrooms</b><br>" +
        "<b>Explanation:</b> Moulds and mushrooms are multicellular fungi.";
    }
}


function checkQ3_14(answer) {
    if (answer === "B") {
        document.getElementById("answer14").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Hyphae are long, slender, thread-like structures found in fungi.";
    } else {
        document.getElementById("answer14").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Hyphae</b><br>" +
        "<b>Explanation:</b> The body of many fungi consists of long, slender, thread-like structures called hyphae.";
    }
}


function checkQ3_15(answer) {
    if (answer === "A") {
        document.getElementById("answer15").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Hyphae play an important role in helping fungi obtain food.";
    } else {
        document.getElementById("answer15").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. They help fungi obtain food</b><br>" +
        "<b>Explanation:</b> Hyphae help fungi absorb nutrients from their surroundings.";
    }
}


function checkQ3_16(answer) {
    if (answer === "B") {
        document.getElementById("answer16").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Fungal cell walls are made up of chitin and polysaccharide.";
    } else {
        document.getElementById("answer16").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Chitin and polysaccharide</b><br>" +
        "<b>Explanation:</b> The cell wall of fungi contains chitin and polysaccharide.";
    }
}


function checkQ3_17(answer) {
    if (answer === "A") {
        document.getElementById("answer17").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Saprophytes get their food from dead substances.";
    } else {
        document.getElementById("answer17").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Organisms that get food from dead substances</b><br>" +
        "<b>Explanation:</b> Saprophytic fungi obtain nutrients from dead organic material.";
    }
}


function checkQ3_18(answer) {
    if (answer === "B") {
        document.getElementById("answer18").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Fungi cannot make their own food, so they are heterotrophs.";
    } else {
        document.getElementById("answer18").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Because they cannot make their own food</b><br>" +
        "<b>Explanation:</b> Fungi depend on other sources for their nutrients.";
    }
}


function checkQ3_19(answer) {
    if (answer === "B") {
        document.getElementById("answer19").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Fungi use extracellular digestion to obtain nutrients.";
    } else {
        document.getElementById("answer19").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Extracellular digestion</b><br>" +
        "<b>Explanation:</b> Fungi digest food outside their bodies and then absorb the nutrients.";
    }
}


function checkQ3_20(answer) {
    if (answer === "B") {
        document.getElementById("answer20").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Parasitic fungi absorb nutrients from living hosts.";
    } else {
        document.getElementById("answer20").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Living hosts</b><br>" +
        "<b>Explanation:</b> Parasitic fungi obtain nutrients from the cells of living organisms.";
    }
}


function checkQ3_21(answer) {
    if (answer === "A") {
        document.getElementById("answer21").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> In mutualism, both organisms benefit from the relationship.";
    } else {
        document.getElementById("answer21").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Both organisms benefit</b><br>" +
        "<b>Explanation:</b> Mutualism is a symbiotic relationship in which both species benefit.";
    }
}


function checkQ3_22(answer) {
    if (answer === "B") {
        document.getElementById("answer22").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> In parasitism, one organism benefits at the expense of the other.";
    } else {
        document.getElementById("answer22").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. One organism benefits at the expense of the other</b><br>" +
        "<b>Explanation:</b> The parasite benefits while the host is harmed.";
    }
}


function checkQ3_23(answer) {
    if (answer === "B") {
        document.getElementById("answer23").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> The symbiotic relationship between fungi and green algae is called lichens.";
    } else {
        document.getElementById("answer23").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Lichens</b><br>" +
        "<b>Explanation:</b> Lichens are formed by a symbiotic relationship involving fungi and green algae.";
    }
}


function checkQ3_24(answer) {
    if (answer === "B") {
        document.getElementById("answer24").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> The symbiotic relationship between fungi and plant roots is called mycorrhizae.";
    } else {
        document.getElementById("answer24").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Mycorrhizae</b><br>" +
        "<b>Explanation:</b> Mycorrhizae is the symbiotic relationship between fungi and plant roots.";
    }
}


function checkQ3_25(answer) {
    if (answer === "A") {
        document.getElementById("answer25").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Yeast is used to make injera rise and to make alcoholic drinks such as tej, tella, and beer.";
    } else {
        document.getElementById("answer25").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Making injera rise and making alcohol</b><br>" +
        "<b>Explanation:</b> Yeast helps dough rise and is also used in producing alcoholic drinks.";
    }
}
function bu1p4(){
    document.body.innerHTML=`
    <h1>Kingdom Plantae</h1>
    <p>Plants make their own food through the process of <b>Photosynthesis</b></p>
    <p>Plant have chloroplasts and chlorophyll pigments</p>
    <p>Some are parasite</p>
    <p>They do not move from one place to another</p>
    <p>Their calls contains arigid cell wall make up of <b> cellulose</b></p>
    <p>They reproduce asexually by vegetative propagation</p>
    <h2>Plant</h2>
    <ol>
    <li>Bryophata</li>
    <li>Pteridophyta</li>
    <li>Spermatophyta</li>
    </ol>
    <h2>Spermatophyta</h2>
    <ol>
    <li>Gymospermae</li>
    <li>Angiospermae</li>
    </ol>
    <h2>Angiospermae</h2>
    <ol>
    <li>Dicotyledon</li>
    <li>Monocotyledon</li>
    </ol>
    <p>Most plants have<b>Waxy cuticle</b> that helps to prevent(mekelakel) drying out</p>
    <p>Abzagnawun plant waxy cuticle mibal neger alewu yhim tikimu bizu wuha awutito endayderqu yredachewal</p>
    <h2>Bryophyta(mosses and liverworts)</h2>
    <p>They don't have true root system</p>
    <p>So they can't get water under the soil</p>
    <p>They are non-vascular(do not have xylem and phloem ) so can't transport food or water</p>
    <p><b>Xylem</b> is dead(Yhin kal yazi) transport tissue in plants,that move <b>water and minerals</b> from soil to upper parts of the planet yhin metergom ayasfelgm</p>
    <p><b>Phloem</b> is living (yhin kal yaz dead male yemote nw living malet be hiywot yale) transport tissue in plants that transport <b>food</b></p>
    <p>Best example of bryophyta is <b>Mosses and liverworts</b></p>
    <h2>Pteridophyta(Ferns)</h2>
    <p>They have true leave, steam and root ayek ke bryophyta be min endemileyewu</p>
    <p>They have vascular(xylem and phloem )</p>
    <p>Yaha yelewum yhin gin guletum alewu</p>
    <h2>Gymnospermae</h2>
    <p>Their seed are not enclosed(meshefen) in fruits</p>
    <p>They have Waxy cuticle</p>
    <p>They can photosynthesis</p>
    <p>They reproductive structure found in cone</p>
    <p>Ye mirabut be cone wusxi balewu neger nw silez ye merabya botawu cone nw</p>
    <h2>Angiospermae</h2>
    <p>They have flowers as reproductive organs</p>
    <p>Angiosperma flowers nw lemerabat mitekemewu</p>
    <p>They have their seeds enclosed in fruit liyunetun eyayek ezih lay seedu be fruit yshefenal yha lay gn ayshefenim</p>
    <h2>Monocotyledon</h2>
    <ul>
    <li><b>Single seed</b></li>
    <li><b>leave are long and parallel</b></li>
    <li><b>do not reach great size</b></li>
    <li><b>They are often wind pollinated</b></li>
    <li><b>Examples Grass, maize (badala😂) and teff</b></li>
    </ul>
    <h2>Dicotyledon</h2>
    <ul>
    <li><b>Two seed</b></li>
    <li><b>leave are broad(sefafi) and branching</b></li>
    <li><b>reach great size</b></li>
    <li><b>They are often insect pollinated</b></li>
    <li><b>Examples Pans, roses and beans</b></li>
    </ul>
    <h1>Kingdom animal Anibib dekmognal esu bicha mikeren Unitu alkoal🤗</h1>
    <button onclick="bu1lq()">
    quiz</button>
    `;
}
function bu1lq(){
    document.body.innerHTML=`
    <h2>Quiz: Kingdom Plantae</h2>

<h3>1. How do plants make their own food?</h3>

<input type="radio" name="q1" onclick="checkQ4_1('A')">
A. Respiration<br>

<input type="radio" name="q1" onclick="checkQ4_1('B')">
B. Photosynthesis<br>

<input type="radio" name="q1" onclick="checkQ4_1('C')">
C. Digestion<br>

<input type="radio" name="q1" onclick="checkQ4_1('D')">
D. Fermentation<br>

<p id="answer1"></p>


<h3>2. Which pigment is important for photosynthesis?</h3>

<input type="radio" name="q2" onclick="checkQ4_2('A')">
A. Chlorophyll<br>

<input type="radio" name="q2" onclick="checkQ4_2('B')">
B. Cellulose<br>

<input type="radio" name="q2" onclick="checkQ4_2('C')">
C. Chitin<br>

<input type="radio" name="q2" onclick="checkQ4_2('D')">
D. Xylem<br>

<p id="answer2"></p>


<h3>3. Where does chlorophyll occur in plant cells?</h3>

<input type="radio" name="q3" onclick="checkQ4_3('A')">
A. Chloroplasts<br>

<input type="radio" name="q3" onclick="checkQ4_3('B')">
B. Xylem<br>

<input type="radio" name="q3" onclick="checkQ4_3('C')">
C. Phloem<br>

<input type="radio" name="q3" onclick="checkQ4_3('D')">
D. Cell wall<br>

<p id="answer3"></p>


<h3>4. What is the main material in the rigid plant cell wall?</h3>

<input type="radio" name="q4" onclick="checkQ4_4('A')">
A. Chitin<br>

<input type="radio" name="q4" onclick="checkQ4_4('B')">
B. Cellulose<br>

<input type="radio" name="q4" onclick="checkQ4_4('C')">
C. Protein<br>

<input type="radio" name="q4" onclick="checkQ4_4('D')">
D. Chlorophyll<br>

<p id="answer4"></p>


<h3>5. How do plants reproduce asexually according to the notes?</h3>

<input type="radio" name="q5" onclick="checkQ4_5('A')">
A. By seeds only<br>

<input type="radio" name="q5" onclick="checkQ4_5('B')">
B. By vegetative propagation<br>

<input type="radio" name="q5" onclick="checkQ4_5('C')">
C. By flowers only<br>

<input type="radio" name="q5" onclick="checkQ4_5('D')">
D. By cones only<br>

<p id="answer5"></p>


<h3>6. Which of the following is a group of plants?</h3>

<input type="radio" name="q6" onclick="checkQ4_6('A')">
A. Bryophyta<br>

<input type="radio" name="q6" onclick="checkQ4_6('B')">
B. Monera<br>

<input type="radio" name="q6" onclick="checkQ4_6('C')">
C. Fungi<br>

<input type="radio" name="q6" onclick="checkQ4_6('D')">
D. Protozoans<br>

<p id="answer6"></p>


<h3>7. Which of the following is NOT one of the three plant groups listed in the notes?</h3>

<input type="radio" name="q7" onclick="checkQ4_7('A')">
A. Bryophyta<br>

<input type="radio" name="q7" onclick="checkQ4_7('B')">
B. Pteridophyta<br>

<input type="radio" name="q7" onclick="checkQ4_7('C')">
C. Spermatophyta<br>

<input type="radio" name="q7" onclick="checkQ4_7('D')">
D. Protozoa<br>

<p id="answer7"></p>


<h3>8. Which two groups are included under Spermatophyta?</h3>

<input type="radio" name="q8" onclick="checkQ4_8('A')">
A. Bryophyta and Pteridophyta<br>

<input type="radio" name="q8" onclick="checkQ4_8('B')">
B. Gymnospermae and Angiospermae<br>

<input type="radio" name="q8" onclick="checkQ4_8('C')">
C. Monocotyledon and Bryophyta<br>

<input type="radio" name="q8" onclick="checkQ4_8('D')">
D. Ferns and mosses<br>

<p id="answer8"></p>


<h3>9. Which two groups are included under Angiospermae?</h3>

<input type="radio" name="q9" onclick="checkQ4_9('A')">
A. Dicotyledon and Monocotyledon<br>

<input type="radio" name="q9" onclick="checkQ4_9('B')">
B. Gymnospermae and Bryophyta<br>

<input type="radio" name="q9" onclick="checkQ4_9('C')">
C. Pteridophyta and Bryophyta<br>

<input type="radio" name="q9" onclick="checkQ4_9('D')">
D. Mosses and liverworts<br>

<p id="answer9"></p>


<h3>10. What is the function of the waxy cuticle?</h3>

<input type="radio" name="q10" onclick="checkQ4_10('A')">
A. To prevent drying out<br>

<input type="radio" name="q10" onclick="checkQ4_10('B')">
B. To produce seeds<br>

<input type="radio" name="q10" onclick="checkQ4_10('C')">
C. To transport food<br>

<input type="radio" name="q10" onclick="checkQ4_10('D')">
D. To produce flowers<br>

<p id="answer10"></p>


<h3>11. Which plants are examples of Bryophyta?</h3>

<input type="radio" name="q11" onclick="checkQ4_11('A')">
A. Mosses and liverworts<br>

<input type="radio" name="q11" onclick="checkQ4_11('B')">
B. Maize and grass<br>

<input type="radio" name="q11" onclick="checkQ4_11('C')">
C. Roses and beans<br>

<input type="radio" name="q11" onclick="checkQ4_11('D')">
D. Ferns and maize<br>

<p id="answer11"></p>


<h3>12. What do Bryophyta lack?</h3>

<input type="radio" name="q12" onclick="checkQ4_12('A')">
A. True root system<br>

<input type="radio" name="q12" onclick="checkQ4_12('B')">
B. Chlorophyll<br>

<input type="radio" name="q12" onclick="checkQ4_12('C')">
C. Cell wall<br>

<input type="radio" name="q12" onclick="checkQ4_12('D')">
D. Cells<br>

<p id="answer12"></p>


<h3>13. Why can Bryophyta not transport water and food effectively?</h3>

<input type="radio" name="q13" onclick="checkQ4_13('A')">
A. They do not have vascular tissue<br>

<input type="radio" name="q13" onclick="checkQ4_13('B')">
B. They have too many roots<br>

<input type="radio" name="q13" onclick="checkQ4_13('C')">
C. They have flowers<br>

<input type="radio" name="q13" onclick="checkQ4_13('D')">
D. They have fruits<br>

<p id="answer13"></p>


<h3>14. What does xylem transport?</h3>

<input type="radio" name="q14" onclick="checkQ4_14('A')">
A. Food only<br>

<input type="radio" name="q14" onclick="checkQ4_14('B')">
B. Water and minerals<br>

<input type="radio" name="q14" onclick="checkQ4_14('C')">
C. Seeds<br>

<input type="radio" name="q14" onclick="checkQ4_14('D')">
D. Flowers<br>

<p id="answer14"></p>


<h3>15. What does phloem transport?</h3>

<input type="radio" name="q15" onclick="checkQ4_15('A')">
A. Food<br>

<input type="radio" name="q15" onclick="checkQ4_15('B')">
B. Water only<br>

<input type="radio" name="q15" onclick="checkQ4_15('C')">
C. Minerals only<br>

<input type="radio" name="q15" onclick="checkQ4_15('D')">
D. Seeds<br>

<p id="answer15"></p>


<h3>16. Which plants are examples of Pteridophyta?</h3>

<input type="radio" name="q16" onclick="checkQ4_16('A')">
A. Ferns<br>

<input type="radio" name="q16" onclick="checkQ4_16('B')">
B. Mosses<br>

<input type="radio" name="q16" onclick="checkQ4_16('C')">
C. Liverworts<br>

<input type="radio" name="q16" onclick="checkQ4_16('D')">
D. Roses<br>

<p id="answer16"></p>


<h3>17. What do Pteridophyta have that Bryophyta do not have?</h3>

<input type="radio" name="q17" onclick="checkQ4_17('A')">
A. True roots, stems and leaves<br>

<input type="radio" name="q17" onclick="checkQ4_17('B')">
B. No cells<br>

<input type="radio" name="q17" onclick="checkQ4_17('C')">
C. No vascular tissue<br>

<input type="radio" name="q17" onclick="checkQ4_17('D')">
D. No leaves<br>

<p id="answer17"></p>


<h3>18. What type of tissue do Pteridophyta have?</h3>

<input type="radio" name="q18" onclick="checkQ4_18('A')">
A. Non-vascular tissue<br>

<input type="radio" name="q18" onclick="checkQ4_18('B')">
B. Vascular tissue<br>

<input type="radio" name="q18" onclick="checkQ4_18('C')">
C. Muscle tissue<br>

<input type="radio" name="q18" onclick="checkQ4_18('D')">
D. Nervous tissue<br>

<p id="answer18"></p>


<h3>19. What is special about the seeds of Gymnospermae?</h3>

<input type="radio" name="q19" onclick="checkQ4_19('A')">
A. They are enclosed in fruits<br>

<input type="radio" name="q19" onclick="checkQ4_19('B')">
B. They are not enclosed in fruits<br>

<input type="radio" name="q19" onclick="checkQ4_19('C')">
C. They have no seeds<br>

<input type="radio" name="q19" onclick="checkQ4_19('D')">
D. They are inside flowers<br>

<p id="answer19"></p>


<h3>20. Where are the reproductive structures of Gymnospermae found?</h3>

<input type="radio" name="q20" onclick="checkQ4_20('A')">
A. In flowers<br>

<input type="radio" name="q20" onclick="checkQ4_20('B')">
B. In cones<br>

<input type="radio" name="q20" onclick="checkQ4_20('C')">
C. In roots<br>

<input type="radio" name="q20" onclick="checkQ4_20('D')">
D. In fruits<br>

<p id="answer20"></p>


<h3>21. What are the reproductive organs of Angiospermae?</h3>

<input type="radio" name="q21" onclick="checkQ4_21('A')">
A. Flowers<br>

<input type="radio" name="q21" onclick="checkQ4_21('B')">
B. Roots<br>

<input type="radio" name="q21" onclick="checkQ4_21('C')">
C. Cones<br>

<input type="radio" name="q21" onclick="checkQ4_21('D')">
D. Leaves<br>

<p id="answer21"></p>


<h3>22. Where are the seeds of Angiospermae enclosed?</h3>

<input type="radio" name="q22" onclick="checkQ4_22('A')">
A. In cones<br>

<input type="radio" name="q22" onclick="checkQ4_22('B')">
B. In fruits<br>

<input type="radio" name="q22" onclick="checkQ4_22('C')">
C. In roots<br>

<input type="radio" name="q22" onclick="checkQ4_22('D')">
D. In stems<br>

<p id="answer22"></p>


<h3>23. Which is a characteristic of Monocotyledon?</h3>

<input type="radio" name="q23" onclick="checkQ4_23('A')">
A. Two seeds<br>

<input type="radio" name="q23" onclick="checkQ4_23('B')">
B. Broad and branching leaves<br>

<input type="radio" name="q23" onclick="checkQ4_23('C')">
C. Single seed<br>

<input type="radio" name="q23" onclick="checkQ4_23('D')">
D. Often insect pollinated<br>

<p id="answer23"></p>


<h3>24. Which of the following is an example of a Monocotyledon?</h3>

<input type="radio" name="q24" onclick="checkQ4_24('A')">
A. Rose<br>

<input type="radio" name="q24" onclick="checkQ4_24('B')">
B. Bean<br>

<input type="radio" name="q24" onclick="checkQ4_24('C')">
C. Maize<br>

<input type="radio" name="q24" onclick="checkQ4_24('D')">
D. Pea<br>

<p id="answer24"></p>


<h3>25. Which of the following is a characteristic of Dicotyledon?</h3>

<input type="radio" name="q25" onclick="checkQ4_25('A')">
A. Single seed<br>

<input type="radio" name="q25" onclick="checkQ4_25('B')">
B. Long and parallel leaves<br>

<input type="radio" name="q25" onclick="checkQ4_25('C')">
C. Two seeds<br>

<input type="radio" name="q25" onclick="checkQ4_25('D')">
D. Often wind pollinated<br>

<p id="answer25"></p>
    `;
}
function checkQ4_1(answer) {
    if (answer === "B") {
        document.getElementById("answer1").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Plants make their own food through the process of photosynthesis.";
    } else {
        document.getElementById("answer1").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Photosynthesis</b><br>" +
        "<b>Explanation:</b> Plants make their own food through the process of photosynthesis.";
    }
}


function checkQ4_2(answer) {
    if (answer === "A") {
        document.getElementById("answer2").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Chlorophyll is the pigment that is important for photosynthesis.";
    } else {
        document.getElementById("answer2").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Chlorophyll</b><br>" +
        "<b>Explanation:</b> Chlorophyll helps plants absorb light energy for photosynthesis.";
    }
}


function checkQ4_3(answer) {
    if (answer === "A") {
        document.getElementById("answer3").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Chlorophyll pigments are found in chloroplasts.";
    } else {
        document.getElementById("answer3").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Chloroplasts</b><br>" +
        "<b>Explanation:</b> Chloroplasts contain chlorophyll pigments used in photosynthesis.";
    }
}


function checkQ4_4(answer) {
    if (answer === "B") {
        document.getElementById("answer4").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Plant cell walls are rigid and made up of cellulose.";
    } else {
        document.getElementById("answer4").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Cellulose</b><br>" +
        "<b>Explanation:</b> Cellulose is the main material in the rigid plant cell wall.";
    }
}


function checkQ4_5(answer) {
    if (answer === "B") {
        document.getElementById("answer5").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Plants can reproduce asexually through vegetative propagation.";
    } else {
        document.getElementById("answer5").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. By vegetative propagation</b><br>" +
        "<b>Explanation:</b> Vegetative propagation is a form of asexual reproduction in plants.";
    }
}


function checkQ4_6(answer) {
    if (answer === "A") {
        document.getElementById("answer6").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Bryophyta is one of the plant groups listed in the notes.";
    } else {
        document.getElementById("answer6").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Bryophyta</b><br>" +
        "<b>Explanation:</b> Bryophyta is a group of plants that includes mosses and liverworts.";
    }
}


function checkQ4_7(answer) {
    if (answer === "D") {
        document.getElementById("answer7").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Protozoa is not one of the three plant groups listed in the notes.";
    } else {
        document.getElementById("answer7").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: D. Protozoa</b><br>" +
        "<b>Explanation:</b> The three plant groups listed are Bryophyta, Pteridophyta, and Spermatophyta.";
    }
}


function checkQ4_8(answer) {
    if (answer === "B") {
        document.getElementById("answer8").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Spermatophyta includes Gymnospermae and Angiospermae.";
    } else {
        document.getElementById("answer8").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Gymnospermae and Angiospermae</b><br>" +
        "<b>Explanation:</b> The two groups under Spermatophyta are Gymnospermae and Angiospermae.";
    }
}


function checkQ4_9(answer) {
    if (answer === "A") {
        document.getElementById("answer9").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Angiospermae includes Dicotyledon and Monocotyledon.";
    } else {
        document.getElementById("answer9").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Dicotyledon and Monocotyledon</b><br>" +
        "<b>Explanation:</b> Angiospermae is divided into Dicotyledon and Monocotyledon.";
    }
}


function checkQ4_10(answer) {
    if (answer === "A") {
        document.getElementById("answer10").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> The waxy cuticle helps prevent plants from drying out.";
    } else {
        document.getElementById("answer10").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. To prevent drying out</b><br>" +
        "<b>Explanation:</b> The waxy cuticle helps reduce water loss from the plant.";
    }
}


function checkQ4_11(answer) {
    if (answer === "A") {
        document.getElementById("answer11").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Bryophyta includes mosses and liverworts.";
    } else {
        document.getElementById("answer11").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Mosses and liverworts</b><br>" +
        "<b>Explanation:</b> Mosses and liverworts are examples of Bryophyta.";
    }
}


function checkQ4_12(answer) {
    if (answer === "A") {
        document.getElementById("answer12").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Bryophyta do not have a true root system.";
    } else {
        document.getElementById("answer12").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. True root system</b><br>" +
        "<b>Explanation:</b> Bryophyta lack a true root system, so they cannot get water from the soil like plants with true roots.";
    }
}


function checkQ4_13(answer) {
    if (answer === "A") {
        document.getElementById("answer13").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Bryophyta are non-vascular plants, so they do not have xylem and phloem.";
    } else {
        document.getElementById("answer13").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. They do not have vascular tissue</b><br>" +
        "<b>Explanation:</b> Bryophyta do not have xylem and phloem for transporting water and food.";
    }
}


function checkQ4_14(answer) {
    if (answer === "B") {
        document.getElementById("answer14").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Xylem transports water and minerals from the soil to the upper parts of the plant.";
    } else {
        document.getElementById("answer14").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Water and minerals</b><br>" +
        "<b>Explanation:</b> Xylem is a transport tissue that moves water and minerals through the plant.";
    }
}


function checkQ4_15(answer) {
    if (answer === "A") {
        document.getElementById("answer15").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Phloem is a living transport tissue that transports food in plants.";
    } else {
        document.getElementById("answer15").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Food</b><br>" +
        "<b>Explanation:</b> Phloem transports food through the plant.";
    }
}


function checkQ4_16(answer) {
    if (answer === "A") {
        document.getElementById("answer16").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Ferns are examples of Pteridophyta.";
    } else {
        document.getElementById("answer16").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Ferns</b><br>" +
        "<b>Explanation:</b> Pteridophyta includes ferns.";
    }
}


function checkQ4_17(answer) {
    if (answer === "A") {
        document.getElementById("answer17").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Pteridophyta have true roots, stems and leaves.";
    } else {
        document.getElementById("answer17").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. True roots, stems and leaves</b><br>" +
        "<b>Explanation:</b> Unlike Bryophyta, Pteridophyta have true roots, stems and leaves.";
    }
}


function checkQ4_18(answer) {
    if (answer === "B") {
        document.getElementById("answer18").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Pteridophyta have vascular tissue containing xylem and phloem.";
    } else {
        document.getElementById("answer18").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. Vascular tissue</b><br>" +
        "<b>Explanation:</b> Pteridophyta have xylem and phloem, which are vascular tissues.";
    }
}


function checkQ4_19(answer) {
    if (answer === "B") {
        document.getElementById("answer19").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Gymnospermae have seeds that are not enclosed in fruits.";
    } else {
        document.getElementById("answer19").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. They are not enclosed in fruits</b><br>" +
        "<b>Explanation:</b> Gymnospermae have seeds that are not enclosed inside fruits.";
    }
}


function checkQ4_20(answer) {
    if (answer === "B") {
        document.getElementById("answer20").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> The reproductive structures of Gymnospermae are found in cones.";
    } else {
        document.getElementById("answer20").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. In cones</b><br>" +
        "<b>Explanation:</b> The reproductive structures of Gymnospermae are found in cones.";
    }
}


function checkQ4_21(answer) {
    if (answer === "A") {
        document.getElementById("answer21").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Angiospermae have flowers as their reproductive organs.";
    } else {
        document.getElementById("answer21").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: A. Flowers</b><br>" +
        "<b>Explanation:</b> Flowers are the reproductive organs of Angiospermae.";
    }
}


function checkQ4_22(answer) {
    if (answer === "B") {
        document.getElementById("answer22").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Angiospermae have seeds enclosed inside fruits.";
    } else {
        document.getElementById("answer22").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: B. In fruits</b><br>" +
        "<b>Explanation:</b> In Angiospermae, the seeds are enclosed in fruits.";
    }
}


function checkQ4_23(answer) {
    if (answer === "C") {
        document.getElementById("answer23").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Monocotyledons have a single seed.";
    } else {
        document.getElementById("answer23").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Single seed</b><br>" +
        "<b>Explanation:</b> Monocotyledons have a single seed and usually have long, parallel leaves.";
    }
}


function checkQ4_24(answer) {
    if (answer === "C") {
        document.getElementById("answer24").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Maize is an example of a monocotyledon.";
    } else {
        document.getElementById("answer24").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Maize</b><br>" +
        "<b>Explanation:</b> Maize is a monocotyledon. Grass and teff are also examples.";
    }
}


function checkQ4_25(answer) {
    if (answer === "C") {
        document.getElementById("answer25").innerHTML =
        "✅ Correct!<br>" +
        "<b>Explanation:</b> Dicotyledons have two seeds.";
    } else {
        document.getElementById("answer25").innerHTML =
        "❌ Wrong!<br>" +
        "<b>Correct answer: C. Two seeds</b><br>" +
        "<b>Explanation:</b> Dicotyledons have two seeds and usually have broad, branching leaves.";
    }
}
