function M10(){
  document.body.innerHTML=`
  <div id="Bu">
          <h1>Welcome to Mathematics</h1>
          <p>Choose a unit</p>
          <button onclick="M10unit1()">Unit One</button>
          <button onclick="M10unit2()">Unit Two</button>
          <button onclick="M10unit3()">Unit Three</button>
          <button onclick="M10unit4()">Unit Four</button>
          <button onclick="M10unit5()">Unit Five</button>
          <button onclick="M10unit6()">Unit Six</button>
          </div>
      <button onclick="grade10()">Back</button>
  `;
}
function M10unit1(){
  document.body.innerHTML=`
  <h3>Relations and functions</h3>
  <p>Relation is a set of ordered pairs</p>
  <p><b>Arithmetic pattern</b></p>
  <p>Example: 2,4,6,8,10.....</p>
  <p>Arithmetic pattern malet yehone neger betemesasay value eyechemere woym eyekenesa  sihed nw</p>
  <p> yelegnawun Example temeliket be 2 eyechemere nw yehedewu</p>
  <p>4-2=2,6-4=2,8-6=2,10-8=2</p>
  <p>Ayeki temesasy nw yewalegnawun ke filefitegnawu sinkenis temesasy value nw minagegnewu</p>
  <p><b>Geometric Pattern</b></p>
  <p>Example: 2,4,8,16,32,64....</p>
  <p>Geometric demo fitegnawun le walegnawu sinakafil temesasy value nw minagegnewu</p>
  <p>Temeliket Exampluni 4/2=2,8/4=2,16/8=2,32/16=2,64/32=2</p>
  <p>Ayeki sinakafil temesasy value nw minagegnewu</p>
  <h4>Exercise 1.1</h4>
  <p>1.Determine tha value of a and b in the following pattern</p>
  <p>65,60,55,50,45,a,35,b</p>
  <button onclick="ab()">Answer</button>
  <h3 id="a"></h3>
  <p>2.Identify the type of pattern for the sequence 4,8,12,16,20...</p>
  <button onclick="ty()">Answer</button>
  <h3 id="t"></h3>
  <h4>Cartesian coordinate system in two dimensions</h4>
  <img id="per" src="qua.png"><br>
  <audio id="qdr" controls>
  <source src="qd.aac.txt"></audio>
  <style>
  #qdr{
    width: 500px;
    max-width:500px:
  }
  </style>
  <p>Example: plot the point whose coordinate are given on a Cartesian coordinate system</p>
  <p>a.A(2,4),B(0,-3),C(-2,1),D(-5,-3)</p>
  <p>b.A(-3,-5),Q(-4,3),R(0,2),S(-2,0)</p>
  <audio id="q" controls>
  <source src="qd1.aac.txt"></audio>
  <style>
  #q{
    width: 500px;
    max-width:500px:
  }
  </style><br>
  <img id="per" src="qdq.png"><br>
  <audio id="s" controls>
  <source src="qs.aac.txt"></audio>
  <style>
  #s{
    width: 500px;
    max-width:500px:
  }
  </style><br>
<p>Example: Given a relation R ,The set of all ordered pairs(X,Y) of real numbers where y is greater than x.
<p>1.which of the following ordered pairs belongs to this realation</p>
<p>(2,4),(4,3),(1.1,1.11),(1.1,-3),(-5,-3),(7,7),(1/2,1/2),(0.45,0.46)</p>
<p>Solution</p>
<p>(2,4),(1.1,1.11),(-5,-3),(0.45,0.46)</p>
  <audio id="b" controls>
  <source src="1.aac.txt"></audio>
  <style>
  #b{
    width: 500px;
    max-width:500px:
  }
  </style>
  <p>Example: Given a realation ,set of all ordered pairs(x,y) of real numbers where y is less than x</p>
  <p>a. which of the following ordered pairs belongs to the realtion</p>
  <p>(2,1),(-4,3),(-2,0),(0.2,0.21),(-0.2,-0.21),(7,7),(-2,-3),(0,-5)</p><br>
<audio id="c" controls>
  <source src="2.aac.txt"></audio>
<style>
   #c{
     width: 500 px;
     max - width: 500 px:
   }
 </style><br>
  
  <button onclick="or()">Answer</button>
  <p id="yless"></p>
  <p>Example: let R be a relation of the set of all ordered pairs (x,y) of natural numbers where <b>y is a multiple of x</b>, then which of the following order pairs belongs to R</p>
  <p>(2,4),(4,3),(3,9),(18,-3),(9,3),(7,7),(3,12),(6,18),(30,5)</p>
  <p>Solution</p>
  <p>(2,4),(3,9),(7,7),(3,12),(6,18),(30,5)</p>
  <audio id="d" controls>
  <source src="3.aac.txt"></audio>
<style>
   #d{
     width: 500 px;
     max - width: 500 px:
   }
 </style><br>
 <h2>Exercise 1.4</h2>

<ol>
  <li>
    If <b>R</b> is a relation of a set of ordered pairs
    (<i>x</i>, <i>y</i>) of real numbers such that
    <b>y = 3x − 2</b> is a relation, then list some ordered pairs
    belong to <b>R</b>.
  </li>

  <li>
    Let <b>R</b> denote the set of ordered pairs
    (<i>x</i>, <i>y</i>) of real numbers, where
    <b>y = x<sup>3</sup></b>.

    <ol type="a">
      <li>
        Find the ordered pairs belong to <b>R</b> which have the
        following first entries:
        <br>
        0, 1, 2, −2, 8,
        <sup>1</sup>&frasl;<sub>5</sub>, 3, −3.
      </li>

      <li>
        Find the ordered pairs belong to <b>R</b> which have the
        following second entries:
        <br>
        8, −1, −8, −27,
        <sup>1</sup>&frasl;<sub>27</sub>.
      </li>
    </ol>
  </li>
</ol>
<p>1.Solution</p>
<p>let x=[0,1,2,3,4]</p>
<p>y=3x-2</p>
<p>x=0,y=3(0)-2,y=0-2,y=-2</p>
<p>(0,-2)</p>
<p>x=1,y=3(1)-2,y=3-2,y=1</p>
<p>(1,1)</p>
<p>x=2,y=3(2)-2,y=6-2,y=4</p>
<p>(2,4)</p>
<p>x=3,y=3(3)-2,y=9-2,y=7</p>
<p>(3,7)</p>
<p>x=4,y=3(4)-2,y=12-2,y=10</p>
<p>(4,10)</p>
<p>(0,-2),(1,1),(2,4),(3,7),(4,10)</p>
<audio id="e" controls>
  <source src="4.aac.txt"></audio>
<style>
   #e{
     width: 500 px;
     max - width: 500 px:
   }
 </style><br>
 <button onclick="mg10u1p2()">Next lesson</button>
 <button onclick="M10()">Back</button>
  `;
}
function ab(){
  document.getElementById("a").innerHTML="a=40,b=30";
}
function ty(){
  document.getElementById("t").innerHTML="Arithmetic pattern";
}
function or(){
  document.getElementById("yless").innerHTML="solution=(2,1),(-0.2,-0.21),(-2,-3),(0,-5)";
}
function mg10u1p2(){
  document.body.innerHTML=`
  <h3>Domain and Range</h3>
  <p>Any set of ordered pairs (x,y)</p>
  <p>The set of first components in the ordered pairs is called the <b>domain</b> of the relation</p>
  <p>The set of second components in the ordered pairs is called the <b>range</b> of the relation</p>
  <p>Example:-(5,3),(-2,4),(5,2),(-2,3) determine the domain and the range of the relation</p>
  <p>Domain= (5,-2,5,-2)</p>
  <p>Range= (3,4,2,3)</p>
  <audio id="f" controls>
  <source src="5.aac.txt"></audio>
<style>
   #f{
     width: 500 px;
     max - width: 500 px:
   }
 </style><br>
 <p>Determine the Domain and the Range of the relation with ordered pairs</p>
 <p>(-2,1),(-1,0),(0,0),(4,2),(3,5)<p>
 <p>Domain = (-2,-1,0,4,3)</p>
 <p>Range = (1,0,0,2,5)</p>
 <h4>Graph of Relation</h4>
 <p>Example: Sketch the graph of the relation R if R is the set of ordered pairs  (x,y) of real numbers x and y such that y=x</p>
 <p>Solution</p>
  
  
  
  
  
  
  
  `;
}
