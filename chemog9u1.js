function chemo9(){
  document.body.innerHTML=`
  <button onclick="grade9()">Back</button>
  
  <div id="Cu">
          <h1>Welcome to Chemistry</h1>
          <p>Before start learning choose the unit</p>
          <button onclick="C9unit1()">Unit One</button>
          <button onclick="C9unit2()">Unit Two</button>
          <button onclick="C9unit3()">Unit Three</button>
          <button onclick="C9unit4()">Unit Four</button>
          <button onclick="C9unit5()">Unit Five</button>
          <button onclick="C9unit6()">Unit Six</button>
          </div>
  `;
}
function C9unit1(){
  document.body.innerHTML=`
  <h1>Unit One</h1>
  <h2>Chemistry and its Important</h2>
  <p><b>Chemistry</b> is the science it study about the properties(በህር), Composition(kemin nw yetegenebut), and Structure of substances</p>
  <h3>Scope of Chemistry</h3>
  <p><b>1.Physical Chemistry</b> it study about Microscopic(bexam tinanish) Properties, atomic properties</p>
  <p><b>2.Organic Chemistry</b> it study of substance Containing(yeyazu) Carbon</p>
  <p><b>3. Inorganic Chemistry</b> it study of the substance that does not Contain Carbon</p>
  <p>Inorganic Chemical are commonly Found in rocks(Alet) and Minerals</p>
  <p><b>4. Analytical Chemistry</b> it study of the composition of matter</p>
  <p><b>5. Biochemistry</b> it study of the Chemical process that occurs in living things</p>
  <h3> The Role Chemistry plays In production and in society</h3>
  <h4>Chemistry be Mirtina be mahiberesebu lay michawotewu Mina</h4>
  <p><b>Agriculture</b></p>
  <p>For Chemical fertilizer such as Calcium super phosphate,urea, ammonium sulphate and sodium nitrate.These chemical increasing the yield of Fruit, vegetables and crops</p>
  <p>For the production of pesticides(aremoch) to minimize (mekenesi) Crop damage</p>
  <p>Examples of Aremoch</p>
  <p>Fungicides, Herbicides,and Insecticides</p>
  </p><b>Food Production</b></p>
  <p>Chemistry has led to the discovery(gignit) of different kinds of food Preservation.
  <p>Chemistry yeteleyayu chemical yazegajilinal Food lemetebek woym indaybelash</p>
  <p>These chemical have great assited to preserve food products for a longer period(gize)</p>
  <p><b>Medicine</b></p>
  <p>We could find a cure for dysentery(tikimat beshita) and pneumonia(saniba mich) as a result of the discovery of sulphur drugs and penicillin</p>
  <p>Ahun lenez beshita chemistry sulphur drugs and penicillin bayazegajilin noro medan anchilm neber</p>
  <h3>Common Drugs Chemistry Provided</h3>
  <p><b>Disinfectant</b> are used to kill Microbe presents in toilet, floor</p>
  <p>Disinfectant yemitekmewu be toilet lay,be wolel woym berenda lay yalu micro organism lemegidel nw</p>
  <p><b>Analgesics</b> or pain killer(ye himem masitagesha) this drugs used to reduce(yikenisal) pain(himem)</p>
  <p><b>Antibiotics</b> Used to control infection and cure(mefewosi) disease</p>
  <h3>What is the difference between Disinfectant and Antibiotics?</h3>
  <h3>Est asib🤔</h3>
  <button onclick="difDA()">Answer</button>
  <p id="DA"></p>
  <p><b>Antiseptics</b> Used to Contamination of the wounds(kusil) by bacteria</p>
  <p>Antiseptic minitkemewu be bacteria yetebekelu kusilochn lemadan nw</p>
  <p><b>Tranquillizer</b> used to reduce(mekenesi) tension and bring about calm(meregagat) and peace(selam) to patients(tamami) suffering (mesekayat) for mental disease</p>
  <p><b>Building Construction Materials</b> To building such as glass , steel, cement.It also helps in construction of long lasting and durable dams and bridgs</p>
  <p><b>Chemical Industries</b> are the Companies that manufacturing(mezegajet) inorganic amd organic chemicals,explosives(mifenedu negeroch like bonb), polymer and rubber</p>
  <p>Chemical industries malet company sihone yeteleyayu ekawochn ye chemistry ewuket tetekmo yetelelayu negeroch miyazegaji company nw</p>
  <p><b>Chemical products</b> mean the product manufactured, processed,sold(meshexi), or distributed by the company</p>
  <p>Chemical products malet ke chemical industries yetezegaju ikawoch malet nw</p>
  <h3>Unit one Aleke Ahun wode quiz🤗🤗</h3>
  <button onclick="C9u1q()">quiz</button>
  <button onclick="chemo9()"><---Back to all Unit</button>
  
  
  
  
  
  
  
  
  
  
  
  `;
}
function difDA(){
  document.getElementById("DA").innerHTML="Disinfectant minitekemewu le eka nw le misale toilet lematsidat beti lemateb nw Neger gin Antibiotics minitekemewu Legna nw ahun lemisale Gip kusil sinoren infection indayzen lemareg nw ahun liyunetu gebak";
  
}
function C9u1q(){
  document.body.innerHTML = `

<h1>Unit One Quiz</h1>
<h2>Chemistry and Its Importance</h2>

<p>Choose the correct answer.</p>

<hr>

<h3>1. What is Chemistry?</h3>

<p>It is the science that studies the properties, composition and structure of:</p>

<input type="radio" name="q1" onclick="q1A()"> A. Substances<br>
<input type="radio" name="q1" onclick="q1B()"> B. Buildings<br>
<input type="radio" name="q1" onclick="q1C()"> C. Crops<br>
<input type="radio" name="q1" onclick="q1D()"> D. Bridges<br>

<p id="a1"></p>

<hr>

<h3>2. Which branch of Chemistry studies microscopic properties and atomic properties?</h3>

<input type="radio" name="q2" onclick="q2A()"> A. Organic Chemistry<br>
<input type="radio" name="q2" onclick="q2B()"> B. Physical Chemistry<br>
<input type="radio" name="q2" onclick="q2C()"> C. Biochemistry<br>
<input type="radio" name="q2" onclick="q2D()"> D. Analytical Chemistry<br>

<p id="a2"></p>

<hr>

<h3>3. Organic Chemistry studies substances containing:</h3>

<input type="radio" name="q3" onclick="q3A()"> A. Calcium<br>
<input type="radio" name="q3" onclick="q3B()"> B. Sulphur<br>
<input type="radio" name="q3" onclick="q3C()"> C. Carbon<br>
<input type="radio" name="q3" onclick="q3D()"> D. Sodium<br>

<p id="a3"></p>

<hr>

<h3>4. Inorganic Chemistry studies substances that do not contain:</h3>

<input type="radio" name="q4" onclick="q4A()"> A. Oxygen<br>
<input type="radio" name="q4" onclick="q4B()"> B. Carbon<br>
<input type="radio" name="q4" onclick="q4C()"> C. Calcium<br>
<input type="radio" name="q4" onclick="q4D()"> D. Sodium<br>

<p id="a4"></p>

<hr>

<h3>5. Inorganic chemicals are commonly found in:</h3>

<input type="radio" name="q5" onclick="q5A()"> A. Rocks and minerals<br>
<input type="radio" name="q5" onclick="q5B()"> B. Hospitals only<br>
<input type="radio" name="q5" onclick="q5C()"> C. Food only<br>
<input type="radio" name="q5" onclick="q5D()"> D. Bridges only<br>

<p id="a5"></p>

<hr>

<h3>6. Which branch studies the composition of matter?</h3>

<input type="radio" name="q6" onclick="q6A()"> A. Biochemistry<br>
<input type="radio" name="q6" onclick="q6B()"> B. Organic Chemistry<br>
<input type="radio" name="q6" onclick="q6C()"> C. Analytical Chemistry<br>
<input type="radio" name="q6" onclick="q6D()"> D. Physical Chemistry<br>

<p id="a6"></p>

<hr>

<h3>7. Biochemistry studies chemical processes that occur in:</h3>

<input type="radio" name="q7" onclick="q7A()"> A. Rocks<br>
<input type="radio" name="q7" onclick="q7B()"> B. Living things<br>
<input type="radio" name="q7" onclick="q7C()"> C. Bridges<br>
<input type="radio" name="q7" onclick="q7D()"> D. Machines<br>

<p id="a7"></p>

<hr>

<h3>8. Which of the following is a chemical fertilizer?</h3>

<input type="radio" name="q8" onclick="q8A()"> A. Urea<br>
<input type="radio" name="q8" onclick="q8B()"> B. Glass<br>
<input type="radio" name="q8" onclick="q8C()"> C. Rubber<br>
<input type="radio" name="q8" onclick="q8D()"> D. Steel<br>

<p id="a8"></p>

<hr>

<h3>9. Chemical fertilizers help to increase the yield of:</h3>

<input type="radio" name="q9" onclick="q9A()"> A. Bridges<br>
<input type="radio" name="q9" onclick="q9B()"> B. Crops<br>
<input type="radio" name="q9" onclick="q9C()"> C. Buildings<br>
<input type="radio" name="q9" onclick="q9D()"> D. Medicines<br>

<p id="a9"></p>

<hr>

<h3>10. Which chemical is mentioned as a fertilizer?</h3>

<input type="radio" name="q10" onclick="q10A()"> A. Penicillin<br>
<input type="radio" name="q10" onclick="q10B()"> B. Urea<br>
<input type="radio" name="q10" onclick="q10C()"> C. Rubber<br>
<input type="radio" name="q10" onclick="q10D()"> D. Glass<br>

<p id="a10"></p>

<hr>

<h3>11. Pesticides are used to minimize:</h3>

<input type="radio" name="q11" onclick="q11A()"> A. Crop damage<br>
<input type="radio" name="q11" onclick="q11B()"> B. Building damage<br>
<input type="radio" name="q11" onclick="q11C()"> C. Bridge construction<br>
<input type="radio" name="q11" onclick="q11D()"> D. Food production<br>

<p id="a11"></p>

<hr>

<h3>12. Which one is an example of a pesticide?</h3>

<input type="radio" name="q12" onclick="q12A()"> A. Fungicide<br>
<input type="radio" name="q12" onclick="q12B()"> B. Urea<br>
<input type="radio" name="q12" onclick="q12C()"> C. Penicillin<br>
<input type="radio" name="q12" onclick="q12D()"> D. Cement<br>

<p id="a12"></p>

<hr>

<h3>13. Chemistry has helped food production by discovering different kinds of:</h3>

<input type="radio" name="q13" onclick="q13A()"> A. Food preservation<br>
<input type="radio" name="q13" onclick="q13B()"> B. Bridges<br>
<input type="radio" name="q13" onclick="q13C()"> C. Pesticides only<br>
<input type="radio" name="q13" onclick="q13D()"> D. Steel<br>

<p id="a13"></p>

<hr>

<h3>14. Food-preserving chemicals help to preserve food for:</h3>

<input type="radio" name="q14" onclick="q14A()"> A. A shorter period<br>
<input type="radio" name="q14" onclick="q14B()"> B. A longer period<br>
<input type="radio" name="q14" onclick="q14C()"> C. One minute<br>
<input type="radio" name="q14" onclick="q14D()"> D. No period<br>

<p id="a14"></p>

<hr>

<h3>15. The discovery of sulphur drugs and penicillin helped in the treatment of:</h3>

<input type="radio" name="q15" onclick="q15A()"> A. Dysentery and pneumonia<br>
<input type="radio" name="q15" onclick="q15B()"> B. Crop damage<br>
<input type="radio" name="q15" onclick="q15C()"> C. Broken bridges<br>
<input type="radio" name="q15" onclick="q15D()"> D. Food preservation<br>

<p id="a15"></p>

<hr>

<h3>16. Which drugs are used to kill microbes present on toilets and floors?</h3>

<input type="radio" name="q16" onclick="q16A()"> A. Analgesics<br>
<input type="radio" name="q16" onclick="q16B()"> B. Antibiotics<br>
<input type="radio" name="q16" onclick="q16C()"> C. Disinfectants<br>
<input type="radio" name="q16" onclick="q16D()"> D. Tranquillizers<br>

<p id="a16"></p>

<hr>

<h3>17. Analgesics are also called:</h3>

<input type="radio" name="q17" onclick="q17A()"> A. Pain killers<br>
<input type="radio" name="q17" onclick="q17B()"> B. Fertilizers<br>
<input type="radio" name="q17" onclick="q17C()"> C. Pesticides<br>
<input type="radio" name="q17" onclick="q17D()"> D. Disinfectants<br>

<p id="a17"></p>

<hr>

<h3>18. Antibiotics are used to:</h3>

<input type="radio" name="q18" onclick="q18A()"> A. Control infection and cure disease<br>
<input type="radio" name="q18" onclick="q18B()"> B. Increase crop yield<br>
<input type="radio" name="q18" onclick="q18C()"> C. Build bridges<br>
<input type="radio" name="q18" onclick="q18D()"> D. Preserve food only<br>

<p id="a18"></p>

<hr>

<h3>19. Which one is used to reduce tension and bring calm and peace to patients?</h3>

<input type="radio" name="q19" onclick="q19A()"> A. Antibiotics<br>
<input type="radio" name="q19" onclick="q19B()"> B. Analgesics<br>
<input type="radio" name="q19" onclick="q19C()"> C. Tranquillizers<br>
<input type="radio" name="q19" onclick="q19D()"> D. Fertilizers<br>

<p id="a19"></p>

<hr>

<h3>20. Which of the following is a building construction material?</h3>

<input type="radio" name="q20" onclick="q20A()"> A. Cement<br>
<input type="radio" name="q20" onclick="q20B()"> B. Penicillin<br>
<input type="radio" name="q20" onclick="q20C()"> C. Urea<br>
<input type="radio" name="q20" onclick="q20D()"> D. Fungicide<br>

<p id="a20"></p>

<hr>

<h2>🔥 Hard Questions</h2>

<h3>21. Which pair is correctly matched?</h3>

<input type="radio" name="q21" onclick="q21A()"> A. Organic Chemistry — composition of matter<br>
<input type="radio" name="q21" onclick="q21B()"> B. Analytical Chemistry — composition of matter<br>
<input type="radio" name="q21" onclick="q21C()"> C. Biochemistry — rocks and minerals<br>
<input type="radio" name="q21" onclick="q21D()"> D. Physical Chemistry — food preservation<br>

<p id="a21"></p>

<hr>

<h3>22. A chemical company manufactures organic and inorganic chemicals, polymers and rubber. This company belongs to which area?</h3>

<input type="radio" name="q22" onclick="q22A()"> A. Chemical industries<br>
<input type="radio" name="q22" onclick="q22B()"> B. Food preservation<br>
<input type="radio" name="q22" onclick="q22C()"> C. Analytical Chemistry<br>
<input type="radio" name="q22" onclick="q22D()"> D. Agriculture only<br>

<p id="a22"></p>

<hr>

<h3>23. Which sequence correctly connects a branch of Chemistry with its main study?</h3>

<input type="radio" name="q23" onclick="q23A()"> A. Biochemistry → chemical processes in living things<br>
<input type="radio" name="q23" onclick="q23B()"> B. Organic Chemistry → substances without carbon<br>
<input type="radio" name="q23" onclick="q23C()"> C. Analytical Chemistry → atomic properties only<br>
<input type="radio" name="q23" onclick="q23D()"> D. Physical Chemistry → substances containing carbon only<br>

<p id="a23"></p>

<hr>

<h3>24. Which statement correctly distinguishes disinfectants from antiseptics?</h3>

<input type="radio" name="q24" onclick="q24A()"> A. Disinfectants kill microbes on places such as toilets and floors, while antiseptics are used on wounds to prevent bacterial contamination.<br>
<input type="radio" name="q24" onclick="q24B()"> B. Disinfectants are pain killers, while antiseptics are fertilizers.<br>
<input type="radio" name="q24" onclick="q24C()"> C. Disinfectants cure diseases, while antiseptics increase crop yield.<br>
<input type="radio" name="q24" onclick="q24D()"> D. Disinfectants and antiseptics are both fertilizers.<br>

<p id="a24"></p>

<hr>

<h3>25. Which combination contains only examples of the roles of Chemistry discussed in this unit?</h3>

<input type="radio" name="q25" onclick="q25A()"> A. Agriculture, food production, medicine, building construction and chemical industries<br>
<input type="radio" name="q25" onclick="q25B()"> B. Agriculture, astronomy, geography, history and music<br>
<input type="radio" name="q25" onclick="q25C()"> C. Medicine, football, geography, astronomy and history<br>
<input type="radio" name="q25" onclick="q25D()"> D. Food production, music, politics, geography and astronomy<br>

<p id="a25"></p>

<hr>

<button onclick="C9unit1()">⬅ Back to Unit One</button>

`;
}
function q1A(){
  document.getElementById("a1").innerHTML =
  "✅ Correct! Chemistry studies the properties, composition and structure of substances.";
}

function q1B(){
  document.getElementById("a1").innerHTML =
  "❌ Wrong. Chemistry studies substances, not buildings.";
}

function q1C(){
  document.getElementById("a1").innerHTML =
  "❌ Wrong. Crops are studied in many areas, but this is not the definition of Chemistry.";
}

function q1D(){
  document.getElementById("a1").innerHTML =
  "❌ Wrong. Bridges are related to construction, not the definition of Chemistry.";
}


function q2A(){
  document.getElementById("a2").innerHTML =
  "❌ Wrong. Organic Chemistry studies substances containing carbon.";
}

function q2B(){
  document.getElementById("a2").innerHTML =
  "✅ Correct! Physical Chemistry studies microscopic and atomic properties.";
}

function q2C(){
  document.getElementById("a2").innerHTML =
  "❌ Wrong. Biochemistry studies chemical processes in living things.";
}

function q2D(){
  document.getElementById("a2").innerHTML =
  "❌ Wrong. Analytical Chemistry studies the composition of matter.";
}


function q3A(){
  document.getElementById("a3").innerHTML =
  "❌ Wrong. Organic Chemistry is associated with carbon.";
}

function q3B(){
  document.getElementById("a3").innerHTML =
  "❌ Wrong. Sulphur is not the answer.";
}

function q3C(){
  document.getElementById("a3").innerHTML =
  "✅ Correct! Organic Chemistry studies substances containing carbon.";
}

function q3D(){
  document.getElementById("a3").innerHTML =
  "❌ Wrong. Sodium is not the answer.";
}


function q4A(){
  document.getElementById("a4").innerHTML =
  "❌ Wrong. The topic identifies carbon.";
}

function q4B(){
  document.getElementById("a4").innerHTML =
  "✅ Correct! Inorganic Chemistry studies substances that do not contain carbon.";
}

function q4C(){
  document.getElementById("a4").innerHTML =
  "❌ Wrong. Calcium is not the answer.";
}

function q4D(){
  document.getElementById("a4").innerHTML =
  "❌ Wrong. Sodium is not the answer.";
}


function q5A(){
  document.getElementById("a5").innerHTML =
  "✅ Correct! Inorganic chemicals are commonly found in rocks and minerals.";
}

function q5B(){
  document.getElementById("a5").innerHTML =
  "❌ Wrong. The topic says rocks and minerals.";
}

function q5C(){
  document.getElementById("a5").innerHTML =
  "❌ Wrong. The topic says rocks and minerals.";
}

function q5D(){
  document.getElementById("a5").innerHTML =
  "❌ Wrong. The topic says rocks and minerals.";
}


function q6A(){
  document.getElementById("a6").innerHTML =
  "❌ Wrong. Biochemistry studies chemical processes in living things.";
}

function q6B(){
  document.getElementById("a6").innerHTML =
  "❌ Wrong. Organic Chemistry studies substances containing carbon.";
}

function q6C(){
  document.getElementById("a6").innerHTML =
  "✅ Correct! Analytical Chemistry studies the composition of matter.";
}

function q6D(){
  document.getElementById("a6").innerHTML =
  "❌ Wrong. Physical Chemistry studies microscopic and atomic properties.";
}


function q7A(){
  document.getElementById("a7").innerHTML =
  "❌ Wrong. Biochemistry focuses on living things.";
}

function q7B(){
  document.getElementById("a7").innerHTML =
  "✅ Correct! Biochemistry studies chemical processes in living things.";
}

function q7C(){
  document.getElementById("a7").innerHTML =
  "❌ Wrong. Rocks are mentioned with inorganic chemicals.";
}

function q7D(){
  document.getElementById("a7").innerHTML =
  "❌ Wrong. Machines are not the answer.";
}


function q8A(){
  document.getElementById("a8").innerHTML =
  "✅ Correct! Urea is one of the chemical fertilizers mentioned.";
}

function q8B(){
  document.getElementById("a8").innerHTML =
  "❌ Wrong. Glass is a building construction material.";
}

function q8C(){
  document.getElementById("a8").innerHTML =
  "❌ Wrong. Rubber is mentioned under chemical industries.";
}

function q8D(){
  document.getElementById("a8").innerHTML =
  "❌ Wrong. Steel is a building construction material.";
}


function q9A(){
  document.getElementById("a9").innerHTML =
  "❌ Wrong. Fertilizers are used to increase agricultural yield.";
}

function q9B(){
  document.getElementById("a9").innerHTML =
  "✅ Correct! Chemical fertilizers increase the yield of fruits, vegetables and crops.";
}

function q9C(){
  document.getElementById("a9").innerHTML =
  "❌ Wrong. Fertilizers are related to agriculture.";
}

function q9D(){
  document.getElementById("a9").innerHTML =
  "❌ Wrong. Fertilizers are related to agriculture.";
}


function q10A(){
  document.getElementById("a10").innerHTML =
  "❌ Wrong. Penicillin is mentioned under medicine.";
}

function q10B(){
  document.getElementById("a10").innerHTML =
  "✅ Correct! Urea is a chemical fertilizer.";
}

function q10C(){
  document.getElementById("a10").innerHTML =
  "❌ Wrong. Rubber is mentioned under chemical industries.";
}

function q10D(){
  document.getElementById("a10").innerHTML =
  "❌ Wrong. Glass is a construction material.";
}


function q11A(){
  document.getElementById("a11").innerHTML =
  "✅ Correct! Pesticides are used to minimize crop damage.";
}

function q11B(){
  document.getElementById("a11").innerHTML =
  "❌ Wrong. Pesticides are used in agriculture.";
}

function q11C(){
  document.getElementById("a11").innerHTML =
  "❌ Wrong. Pesticides are not used to build bridges.";
}

function q11D(){
  document.getElementById("a11").innerHTML =
  "❌ Wrong. Pesticides help protect crops.";
}


function q12A(){
  document.getElementById("a12").innerHTML =
  "✅ Correct! Fungicides are examples of pesticides.";
}

function q12B(){
  document.getElementById("a12").innerHTML =
  "❌ Wrong. Urea is a fertilizer.";
}

function q12C(){
  document.getElementById("a12").innerHTML =
  "❌ Wrong. Penicillin is a drug mentioned under medicine.";
}

function q12D(){
  document.getElementById("a12").innerHTML =
  "❌ Wrong. Cement is a construction material.";
}


function q13A(){
  document.getElementById("a13").innerHTML =
  "✅ Correct! Chemistry has helped discover different kinds of food preservation.";
}

function q13B(){
  document.getElementById("a13").innerHTML =
  "❌ Wrong. Bridges are related to construction.";
}

function q13C(){
  document.getElementById("a13").innerHTML =
  "❌ Wrong. Pesticides are related to agriculture.";
}

function q13D(){
  document.getElementById("a13").innerHTML =
  "❌ Wrong. Steel is a construction material.";
}


function q14A(){
  document.getElementById("a14").innerHTML =
  "❌ Wrong. Food-preserving chemicals help preserve food for a longer period.";
}

function q14B(){
  document.getElementById("a14").innerHTML =
  "✅ Correct! These chemicals help preserve food products for a longer period.";
}

function q14C(){
  document.getElementById("a14").innerHTML =
  "❌ Wrong. The topic says a longer period.";
}

function q14D(){
  document.getElementById("a14").innerHTML =
  "❌ Wrong. The topic says a longer period.";
}


function q15A(){
  document.getElementById("a15").innerHTML =
  "✅ Correct! Sulphur drugs and penicillin helped in the treatment of dysentery and pneumonia.";
}

function q15B(){
  document.getElementById("a15").innerHTML =
  "❌ Wrong. Crop damage is related to pesticides.";
}

function q15C(){
  document.getElementById("a15").innerHTML =
  "❌ Wrong. Bridges are related to construction.";
}

function q15D(){
  document.getElementById("a15").innerHTML =
  "❌ Wrong. Food preservation is a different role of Chemistry.";
}


function q16A(){
  document.getElementById("a16").innerHTML =
  "❌ Wrong. Analgesics are pain killers.";
}

function q16B(){
  document.getElementById("a16").innerHTML =
  "❌ Wrong. Antibiotics control infection and cure disease.";
}

function q16C(){
  document.getElementById("a16").innerHTML =
  "✅ Correct! Disinfectants kill microbes present on places such as toilets and floors.";
}

function q16D(){
  document.getElementById("a16").innerHTML =
  "❌ Wrong. Tranquillizers reduce tension and bring calm.";
}


function q17A(){
  document.getElementById("a17").innerHTML =
  "✅ Correct! Analgesics are also called pain killers.";
}

function q17B(){
  document.getElementById("a17").innerHTML =
  "❌ Wrong. Fertilizers are used in agriculture.";
}

function q17C(){
  document.getElementById("a17").innerHTML =
  "❌ Wrong. Pesticides are used to minimize crop damage.";
}

function q17D(){
  document.getElementById("a17").innerHTML =
  "❌ Wrong. Disinfectants kill microbes on places such as toilets and floors.";
}


function q18A(){
  document.getElementById("a18").innerHTML =
  "✅ Correct! Antibiotics are used to control infection and cure disease.";
}

function q18B(){
  document.getElementById("a18").innerHTML =
  "❌ Wrong. Fertilizers increase agricultural yield.";
}

function q18C(){
  document.getElementById("a18").innerHTML =
  "❌ Wrong. Construction materials are used for building.";
}

function q18D(){
  document.getElementById("a18").innerHTML =
  "❌ Wrong. Food preservation is a different role of Chemistry.";
}


function q19A(){
  document.getElementById("a19").innerHTML =
  "❌ Wrong. Antibiotics control infection and cure disease.";
}

function q19B(){
  document.getElementById("a19").innerHTML =
  "❌ Wrong. Analgesics reduce pain.";
}

function q19C(){
  document.getElementById("a19").innerHTML =
  "✅ Correct! Tranquillizers reduce tension and bring calm and peace to patients.";
}

function q19D(){
  document.getElementById("a19").innerHTML =
  "❌ Wrong. Fertilizers are used in agriculture.";
}


function q20A(){
  document.getElementById("a20").innerHTML =
  "✅ Correct! Cement is a building construction material.";
}

function q20B(){
  document.getElementById("a20").innerHTML =
  "❌ Wrong. Penicillin is related to medicine.";
}

function q20C(){
  document.getElementById("a20").innerHTML =
  "❌ Wrong. Urea is a fertilizer.";
}

function q20D(){
  document.getElementById("a20").innerHTML =
  "❌ Wrong. Fungicide is a pesticide.";
}