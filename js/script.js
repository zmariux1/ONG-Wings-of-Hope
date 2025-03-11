// Replace Text In Header
const checkReplace1 = document.querySelector('.replace-me1');

if (checkReplace1 !== null) {
  const replace = new ReplaceMe(checkReplace1, {
    animation: 'animated fadeIn',
    speed: 2000,
    separator: ',',
    loopCount: 'infinite',
    autoRun: true,
  });
}

const checkReplace2 = document.querySelector('.replace-me2');

if (checkReplace2 !== null) {
  const replace = new ReplaceMe(checkReplace2, {
    animation: 'animated fadeIn',
    speed: 2000,
    separator: ',',
    loopCount: 'infinite',
    autoRun: true,
  });
}

// User Scroll For Navbar
function userScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-light');
      navbar.classList.add('border-bottom');
      navbar.classList.add('border-secondary');
      navbar.classList.add('navbar-sticky');
    } else {
      navbar.classList.remove('bg-light');
      navbar.classList.remove('border-bottom');
      navbar.classList.remove('border-secondary');
      navbar.classList.remove('navbar-sticky');
    }
  });
}




// close the navbar 
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbarNavDropdown");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-item a");
  const langButtons = [document.getElementById("lang1"), document.getElementById("lang2")];

  // Function to remove .show class
  function closeNavbar() {
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }

  // Remove .show when any <li> link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", closeNavbar);
  });

  // Remove .show when #lang1 or #lang2 is clicked
  langButtons.forEach(button => {
    button.addEventListener("click", closeNavbar);
  });

  // Remove .show when clicking outside the navbar
  document.addEventListener("click", function (event) {
    if (
      !navbar.contains(event.target) && 
      !event.target.closest(".navbar-toggler") &&
      !event.target.closest("#lang1") &&
      !event.target.closest("#lang2")
    ) {
      closeNavbar();
    }
  });
});
















document.addEventListener('DOMContentLoaded', userScroll);



// ===================== Scroll Reveal - 1 time ===================== 
ScrollReveal({
  reset: false,
  distance: "80px",
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal("", { origin: "top" });
ScrollReveal().reveal(".partners", { origin: "bottom" });
ScrollReveal().reveal(".header,", { origin: "left" });
ScrollReveal().reveal(".details-2 ul", { origin: "right" });



// portfolio delay presentation  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ScrollReveal({
  reset: false,
  distance: "80px",
  duration: 2000,
  delay: 600
});
ScrollReveal().reveal(".partners img", { origin: "bottom" });
ScrollReveal().reveal("header .container h2", { origin: "left" });
ScrollReveal().reveal("", { origin: "right" });



ScrollReveal({
  reset: false,
  distance: "80px",
  duration: 2000,
  delay: 800
});
ScrollReveal().reveal("header .container h1", { origin: "left" });


ScrollReveal({
  reset: false,
  distance: "80px",
  duration: 2000,
  delay: 900
});
ScrollReveal().reveal("header .container p, header .container a", { origin: "left" });





// ===================== Scroll Reveal - infinite ===================== 
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 1500,
  delay: 100
});

ScrollReveal().reveal(".animatedD p", { origin: "bottom" });


ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal("", { origin: "top" });
ScrollReveal().reveal("", { origin: "bottom" });
ScrollReveal().reveal("., .details ul", { origin: "left" });
ScrollReveal().reveal(".details-2 ul", { origin: "right" });


ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 800
});
ScrollReveal().reveal(".myContacts", { origin: "left" });



// Switch Languages xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Get the elements
const lang1 = document.getElementById('lang1');
const lang2 = document.getElementById('lang2');
const lang1_text = document.getElementById('lang1_text');
const lang2_text = document.getElementById('lang2_text');
const langText1 = document.querySelector('.lang1'); 
const langText2 = document.querySelector('.lang2'); 
const langText3 = document.querySelector('.lang3'); 
const langText4 = document.querySelector('.lang4'); 
const langText5 = document.querySelector('.lang5'); 
const langText6 = document.querySelector('.lang6'); 
const langText7 = document.querySelector('.lang7'); 
const langText8 = document.querySelector('.lang8'); 
const langText9 = document.querySelector('.lang9'); 
const langText10 = document.querySelector('.lang10'); 
const langText11 = document.querySelector('.lang11'); 
const langText11_2 = document.querySelector('.lang11_2'); 
const langText12 = document.querySelector('.lang12'); 
const langText13 = document.querySelector('.lang13'); 
const langText14 = document.querySelector('.lang14'); 
const langText15 = document.querySelector('.lang15'); 
const langText16 = document.querySelector('.lang16'); 
const langText17 = document.querySelector('.lang17'); 
const langText18 = document.querySelector('.lang18'); 
const langText19 = document.querySelector('.lang19'); 
const langText20 = document.querySelector('.lang20');

const langText21 = document.querySelector('.lang21'); 
const langText22 = document.querySelector('.lang22'); 
const langText23 = document.querySelector('.lang23'); 
const langText24 = document.querySelector('.lang24'); 
const langText25 = document.querySelector('.lang25'); 
const langText26 = document.querySelector('.lang26'); 
const langText27 = document.querySelector('.lang27'); 
const langText28 = document.querySelector('.lang28'); 
const langText29 = document.querySelector('.lang29');
const langText30 = document.querySelector('.lang30');

const langText31 = document.querySelector('.lang31'); 
const langText32 = document.querySelector('.lang32'); 
const langText33 = document.querySelector('.lang33'); 
const langText34 = document.querySelector('.lang34'); 
const langText35 = document.querySelector('.lang35'); 
const langText36 = document.querySelector('.lang36'); 
const langText37 = document.querySelector('.lang37'); 
const langText38 = document.querySelector('.lang38'); 
const langText39 = document.querySelector('.lang39'); 
const langText40 = document.querySelector('.lang40'); 

const langText41 = document.querySelector('.lang41'); 
const langText42 = document.querySelector('.lang42'); 
const langText43 = document.querySelector('.lang43'); 
const langText44 = document.querySelector('.lang44'); 
const langText45 = document.querySelector('.lang45'); 
const langText46 = document.querySelector('.lang46'); 
const langText47 = document.querySelector('.lang47'); 
const langText47_2 = document.querySelector('.lang47_2'); 
const langText48 = document.querySelector('.lang48'); 
const langText49 = document.querySelector('.lang49'); 
const langText50 = document.querySelector('.lang50'); 

const langText51 = document.querySelector('.lang51'); 
const langText52 = document.querySelector('.lang52'); 
const langText53 = document.querySelector('.lang53'); 
const langText54 = document.querySelector('.lang54'); 
const langText55 = document.querySelector('.lang55'); 
const langText56 = document.querySelector('.lang56'); 
const langText57 = document.querySelector('.lang57'); 
const langText58 = document.querySelector('.lang58'); 
const langText59 = document.querySelector('.lang59'); 
const langText60 = document.querySelector('.lang60'); 

const langText61 = document.querySelector('.lang61'); 
const langText62 = document.querySelector('.lang62'); 
const langText63 = document.querySelector('.lang63'); 
const langText64 = document.querySelector('.lang64'); 
const langText65 = document.querySelector('.lang65'); 
const langText66 = document.querySelector('.lang66'); 
const langText67 = document.querySelector('.lang67'); 
const langText68 = document.querySelector('.lang68'); 
const langText69 = document.querySelector('.lang69'); 
const langText70 = document.querySelector('.lang70'); 

const langText71 = document.querySelector('.lang71'); 
// Voluntariat 72-76
const langText77 = document.querySelector('.lang77'); 
const langText78 = document.querySelector('.lang78'); 
const langText79 = document.querySelector('.lang79'); 
const langText80 = document.querySelector('.lang80'); 

const langText81 = document.querySelector('.lang81'); 
const langText82 = document.querySelector('.lang82');
const langText83 = document.querySelector('.lang83'); 
const langText84 = document.querySelector('.lang84');
const langText85 = document.querySelector('.lang85'); 
const langText86 = document.querySelector('.lang86');
const langText87 = document.querySelector('.lang87');
const langText88 = document.querySelector('.lang88'); 
const langText89 = document.querySelector('.lang89');
const langText90 = document.querySelector('.lang90'); 
const langText91 = document.querySelector('.lang91'); 
const langText92 = document.querySelector('.lang92'); 
const langText93 = document.querySelector('.lang93'); 
const langText94 = document.querySelector('.lang94'); 


// Add event listener to English
lang2.addEventListener('click', function() {
  lang2.classList.add('hidden');
  lang1.classList.remove('hidden');

  lang1_text.classList.add('hidden');
  lang2_text.classList.remove('hidden');

  // if (langText1) {
  //   langText1.innerHTML = 'xxx'; 
  // }
  if (langText2) {
    langText2.innerHTML = `We believe in the inherent <B class="colorStrong">dignity</B> of every person, working hand-in-hand with communities to <B class="colorStrong">overcome poverty</B> and build sustainable paths toward the future.`; 
  }
  if (langText3) {
    langText3.innerHTML = `Learn More`; 
  }
  if (langText4) {
    langText4.innerHTML = 'Our Partners'; 
  }
  if (langText5) {
    langText5.innerHTML = `<strong class="colorStrong">Wings of Hope – Building a Better Future for Children</strong> <br> strongly believes in the power of community and solidarity. We are dedicated to supporting children through education, counseling, and inclusion, providing them with access to opportunities that can change their lives. Through our projects, we encourage tolerance, acceptance, and community engagement so that every child has an equal chance.`; 
  }
  if (langText6) {
    langText6.innerHTML = 'About'; 
  }
  if (langText7) {
    langText7.innerHTML = `<strong class="colorStrong">A limitless future</strong> <br> offers more than just support – we provide children with experiences that open their minds and hearts. Through aeronautical activities and water sports, hiking, camping, and creative workshops, we help them overcome their limits and discover new passions. Together, we give children wings to soar toward a better future by turning their dreams into reality.`; 
  }
  if (langText8) {
    langText8.innerHTML = 'Activities'; 
  }
  if (langText9) {
    langText9.innerHTML = "Let's Bring a Smile"; 
  }
  if (langText10) {
    langText10.innerHTML = "We are committed to teaching them that their socio-economic circumstances should not define their ability to smile. We are here to show them how to smile with:"; 
  }
  if (langText11) {
    langText11.innerHTML = `Swimming Lessons`; 
  }
  if (langText11_2) {
    langText11_2.innerHTML = `Show More`; 
  }
  if (langText12) {
    langText12.innerHTML = 'Swimming Lessons'; 
  }
  if (langText13) {
    langText13.innerHTML = `The Wings of Hope association gives underprivileged children the chance to learn swimming with certified instructors, thanks to each donation. Beyond just a skill, swimming helps them build confidence, make friends, and grow in a supportive environment. Every contribution brings a smile and a brighter future. <br>(It's not always about the lack of food. They also have to feed their hearts and minds)`; 
  }
  if (langText14) {
    langText14.innerHTML = 'Show less'; 
  }
  if (langText18) {
    langText18.innerHTML = `Hiking / Camping`; 
  }
  if (langText19) {
    langText19.innerHTML = `Show More`; 
  }
  if (langText20) {
    langText20.innerHTML = 'Hiking / Camping'; 
  }
  if (langText21) {
    langText21.innerHTML = `The Wings of Hope association gives underprivileged children the chance to explore nature through hiking & short/long-term camps (3-15 days), thanks to each donation. These experiences teach them that the world is not a bad place and that effort leads to beautiful rewards—just like reaching a breathtaking view after a climb. Every contribution helps open their eyes to new possibilities. <br>(It's not always about the lack of food. They also have to feed their hearts and minds)`; 
  }
  
  if (langText22) {
    langText22.innerHTML = 'Show Less'; 
  }
  if (langText23) {
    langText23.innerHTML = `Paragliding Flights <br> (in tandem)`; 
  }
  if (langText24) {
    langText24.innerHTML = `Show More`; 
  }
  if (langText25) {
    langText25.innerHTML = `Paragliding Flights <br> (in tandem) `; 
  }
  if (langText26) {
    langText26.innerHTML = `The Wings of Hope association gives underprivileged children the chance to experience tandem paragliding  with certified instructors, thanks to each donation. This teaches them that what  seems scary or too big at first can become simple once they dare to explore. Your support  helps children embrace curiosity and overcome their fears, one flight at a time. <br> (It's not always about the lack of food. They also have to feed their hearts and minds)`; 
  }
  if (langText27) {
    langText27.innerHTML = 'Show Less'; 
  }
  if (langText28) {
    langText28.innerHTML = "Donations"; 
  }
  if (langText29) {
    langText29.innerHTML = `Your kindness can change a child's future. Every donation makes a difference!`; 
  }
  
  if (langText30) {
    langText30.innerHTML = 'How can you support us?'; 
  }
  if (langText31) {
    langText31.innerHTML = `It's simple. You can donate through any of the following options:`; 
  }
  if (langText32) {
    langText32.innerHTML = ` <strong class="colorStrong">The 220 Form:</strong> Redirect 3.5% of your income tax to us — at no cost to you.`; 
  }
  if (langText33) {
    langText33.innerHTML = `<strong class="colorStrong">Bank Transfer:</strong> This is one of the fastest and easiest ways to donate.`; 
  }
  if (langText34) {
    langText34.innerHTML = `<strong class="colorStrong">CEC:</strong> If you prefer to write things down, this option is always a pleasure and a delightful surprise.`; 
  }
  if (langText35) {
    langText35.innerHTML = '230 Form'; 
  }
  if (langText36) {
    langText36.innerHTML = 'Bank Transfer'; 
  }
  if (langText37) {
    langText37.innerHTML = 'Company Donation'; 
  }
  if (langText38) {
    langText38.innerHTML = 'The 220 Form - 3,5%'; 
  }
  if (langText39) {
    langText39.innerHTML = 'Redirect 3.5% of your income tax.'; 
  }
  
  if (langText40) {
    langText40.innerHTML = 'Why to redirect the 3.5% tax?'; 
  }
  if (langText41) {
    langText41.innerHTML = 'If you are an employee, you have the option to redirect 3.5% of your income tax towards our projects. This does not involve any additional costs for you, just the redirection of part of the state budget to a cause you support.'; 
  }
  if (langText42) {
    langText42.innerHTML = 'The redirected tax is not a sponsorship or a donation, but a legal option through which you can support a foundation, an association, or a non-profit entity like ours.'; 
  }
  if (langText43) {
    langText43.innerHTML = `The only action you need to take is to follow 1 single step below to complete the <strong>form 230</strong>.`; 
  }
  if (langText44) {
    langText44.innerHTML = 'How to redirect 3.5% of income tax?'; 
  }
  if (langText45) {
    langText45.innerHTML = 'Step 1: Download the form'; 
  }
  if (langText46) {
    langText46.innerHTML = `The required form is <strong class="colorStrong">Declaration 230</strong>, which can only be completed by individuals whose income comes exclusively from salaries.`; 
  }
  if (langText47) {
    langText47.innerHTML = 'You can download the form filled with our details from HERE'; 
  }
  if (langText47_2) {
    langText47.innerHTML = 'Download FORM 230 - 3.5%'; 
  }
  if (langText48) {
    langText48.innerHTML = 'If you prefer to complete the declaration directly at the Tax Administration or download it from the ANAF website, you must manually fill in our details:'; 
  }
  if (langText49) {
    langText49.innerHTML = `<strong class="colorStrong">Non-profit entity name:</strong> Wings of Hope Association. <br> <strong class="colorStrong">Tax Identification Code:</strong> 27735535 <br> <strong class="colorStrong">Bank Account (IBAN):</strong> RO15RNCB0088119857540001 (RON)`; 
  }
  
  
  if (langText50) {
    langText50.innerHTML = 'Step 2: Complete the form'; 
  }
  if (langText51) {
    langText51.innerHTML = 'After downloading the form, fill it out with your identification details in the section dedicated to the taxpayer.'; 
  }
  if (langText52) {
    langText52.innerHTML = 'Step 3: Sign and submit the form'; 
  }
  if (langText53) {
    langText53.innerHTML = 'The completed and signed form must be submitted by May 25 to the Tax Administration office where you are registered with your residence.'; 
  }
  if (langText54) {
    langText54.innerHTML = 'How can you submit the form?'; 
  }
  if (langText55) {
    langText55.innerHTML = "It's simple. You chose through any of the following options:"; 
  }
  if (langText56) {
    langText56.innerHTML = 'A. In person at the ANAF counter'; 
  }
  if (langText57) {
    langText57.innerHTML = 'B. By mail'; 
  }
  if (langText58) {
    langText58.innerHTML = "If you don\'t have time to go in person, you can send the form by mail with delivery confirmation."; 
  }
  if (langText59) {
    langText59.innerHTML = 'The fee charged by the Romanian Post for this service is approximately 6.30 RON for an envelope weighing up to 20g.'; 
  }
  
  if (langText60) {
    langText60.innerHTML = `Don’t know which ANAF office you belong to? Here’s a <a href="https://static.anaf.ro/static/10/Anaf/AsistentaContribuabili_r/telefoane_judete/Regiuni.htm">link to the list of ANAF addresses</a>.`; 
  }
  if (langText61) {
    langText61.innerHTML = 'C. Online'; 
  }
  if (langText62) {
    langText62.innerHTML = 'If you have a digital signature, you can complete the declaration online on the ANAF website.'; 
  }
  if (langText63) {
    langText63.innerHTML = 'If you do not have a digital signature, you can create a user account on the ANAF website.'; 
  }
  if (langText64) {
    langText64.innerHTML = 'D. Submission by authorization'; 
  }
  if (langText65) {
    langText65.innerHTML = `If you live in Bucharest or another county, you can request an authorization  form by  <a class="" href="mailto:blue42wings@yahoo.ca"><i class='bx bx-envelope' ></i></a> Email: <a class="" href="mailto:blue42wings@yahoo.ca">blue42wings@yahoo.ca</a>, and a representative will submit the  form on your behalf.`; 
  }
  if (langText66) {
    langText66.innerHTML = "By Bank Transfer"; 
  }
  if (langText67) {
    langText67.innerHTML = "Support any program of the Wings of Hope Association that interests you."; 
  }
  if (langText68) {
    langText68.innerHTML = "The necessary details for the bank transfer:"; 
  }
  if (langText69) {
    langText69.innerHTML = "IBAN Code."; 
  }
  
  if (langText70) {
    langText70.innerHTML = "IBAN Code."; 
  }
  if (langText71) {
    langText71.innerHTML = "Fast & Simple"; 
  }
  
  // Voluntariat 72-76

  if (langText77) {
    langText77.innerHTML = "How can you help more?"; 
  }
  if (langText78) {
    langText78.innerHTML = `<strong >Share the information:</strong> Tell your friends about the possibility to redirect 3.5% of their income tax.`; 
  }
  if (langText79) {
    langText79.innerHTML = `<strong >Promote the cause on social media:</strong> Share this message on Facebook, Twitter, LinkedIn, etc.`; 
  }
  
  if (langText80) {
    langText80.innerHTML = "About Us"; 
  }
  if (langText81) {
    langText81.innerHTML = `<strong class="text-secondary">Wings of Hope</strong> is dedicated to supporting underprivileged children by providing them with access to education, safety, and opportunities for a better future. We strive to build a more equitable world through support programs, mentorship, and donations. Get involved and help us change lives!`; 
  }
  if (langText82) {
    langText82.innerHTML = "We’d love to hear from you"; 
  }
  if (langText83) {
    langText83.innerHTML = "Company Donation"; 
  }
  if (langText84) {
    langText84.innerHTML = `<strong class="colorStrong">Become our partner!</strong> Discover how your company can support the  Wings of Hope programs.`; 
  }
  if (langText85) {
    langText85.innerHTML = "Our association provides a variety of support services aimed at helping children, their families, and the communities they belong to. Your company’s contribution can prevent funding shortages when large-scale projects need to be initiated, and your support can make a real impact by sponsoring a key part of the initiative."; 
  }
  if (langText86) {
    langText86.innerHTML = "Redirects 20% of your's company income tax."; 
  }
  if (langText87) {
    langText87.innerHTML = "Companies can support our mission by redirecting 20% of their corporate income tax, helping fund programs that benefit children—without incurring any additional costs for the sponsoring company.  "; 
  }
  if (langText88) {
    langText88.innerHTML = "Sponsorships are fully deductible from corporate income tax, provided they fall within legal limits and are made before the end of the year through a sponsorship agreement."; 
  }
  if (langText89) {
    langText89.innerHTML = "Promotes 3.5% among employees"; 
  }
  if (langText90) {
    langText90.innerHTML = "Your employees have the option to redirect 3.5% of their income tax towards our projects. This does not involve any additional costs for you or them, just the redirection of part of the state budget to a cause you support."; 
  }
  if (langText91) {
    langText91.innerHTML = `We offer detailed guidance on how they can redirect 3.5% of their income tax towards our projects through the <strong class="colorStrong"><a href="http://127.0.0.1:5500/frontend/index.html#donations" onclick="window.location.reload(); return false;">230 Form</a></strong> section`; 
  }
  if (langText92) {
    langText92.innerHTML = "How to redirect 3.5% of income tax? (Simplified Online)"; 
  }
  if (langText93) {
    langText93.innerHTML = "1 Single Step: Access the form and fill it online"; 
  }
  if (langText94) {
    langText94.innerHTML = `You can access & fill the form with your details HERE <div class="badge bg-primary p-2 text-uppercase text-dark f230ro-lansare f230ro-buton">   <strong> <i class="fa-brands fa-wpforms"></i> &nbsp; Online FORM 230 - 3.5%  &nbsp; <i class="fa-brands fa-wpforms"></i> </strong>  </div>.`; 
  }
});


// Add event listener to Romanian
lang1.addEventListener('click', function() {
  lang1.classList.add('hidden');
  lang2.classList.remove('hidden');

  lang2_text.classList.add('hidden');
  lang1_text.classList.remove('hidden');

  // if (langText1) {
  //   langText1.innerHTML = 'Solidificarea Comunităților, Ruperea Cercului Sărăciei, Reconstruirea Vieților cu Demnitate.'; 
  // }
  if (langText2) {
    langText2.innerHTML = `Credem în <B class="colorStrong">demnitatea inerentă</B> a fiecărei persoane, lucrând îalături de comunitățile pentru a <B class="colorStrong">depăși neajunsurile</B> și a construi căi durabile spre viitor.`; 
  }
  if (langText3) {
    langText3.innerHTML = `Afla mai mult`; 
  }
  if (langText4) {
    langText4.innerHTML = 'Partenerii Nostri'; 
  }
  if (langText5) {
    langText5.innerHTML = `<strong class="colorStrong">Wings of Hope – Construim un viitor mai bun pentru copii</strong> <br> Wings of Hope crede în puterea comunității și a solidarității.  Ne dedicăm sprijinirii copiilor prin educație, consiliere și incluziune, oferindu-le acces la oportunități  care le pot schimba viața. Prin proiectele noastre, încurajăm toleranța, acceptarea și implicarea comunitară, pentru ca toti copii sa aibe sanse egale.`; 
  }
  if (langText6) {
    langText6.innerHTML = 'Despre'; 
  }
  if (langText7) {
    langText7.innerHTML = `<strong class="colorStrong">Un viitor fără limite</strong>   <br>   Wings of Hope oferă copiilor mai mult decât sprijin – le oferă experiențe care le deschid mintea și sufletul.    Prin sporturi aeronautice și acvatice, drumeții, tabere și ateliere de creatie, îi ajutăm să-și depășească limitele și să descopere noi pasiuni. Împreună, transformăm visurile copiilor în realitate și le oferim aripi pentru a zbura spre un viitor mai bun.`; 
  }
  if (langText8) {
    langText8.innerHTML = 'Activități'; 
  }
  if (langText9) {
    langText9.innerHTML = 'Aducem un zâmbet'; 
  }
  if (langText10) {
    langText10.innerHTML = 'Investim efort pentru a-i învăța că situația lor socială sau economică nu ar trebui să le definească motivul de a zâmbi. Suntem aici pentru a-i învăța să zâmbească cu:'; 
  }
  if (langText11) {
    langText11.innerHTML = `Lecții de Înot`; 
  }
  if (langText11_2) {
    langText11_2.innerHTML = `Detaliază`; 
  }
  if (langText12) {
    langText12.innerHTML = 'Lecții de Înot'; 
  }
  if (langText13) {
    langText13.innerHTML = `Asociatia Wings of Hope oferă copiilor defavorizați șansa de a învăța să înoate cu instructori certificați, datorită fiecărei donații. Dincolo de a fi doar o abilitate, înotul îi ajută să își construiască încrederea, să își facă prieteni și să crească într-un mediu de susținere. Fiecare contribuție aduce un zâmbet și un viitor mai luminos. <br> (Nu este întotdeauna vorba despre lipsa hranei. Trebuie să își hrănească și inimile și mințile.)`; 
  }
  if (langText14) {
    langText14.innerHTML = 'Arată mai putin'; 
  }
  if (langText18) {
    langText18.innerHTML = `Drumeții / Tabere`; 
  }
  if (langText19) {
    langText19.innerHTML = `Detaliază`; 
  }
  if (langText20) {
    langText20.innerHTML = 'Drumeții / Tabere'; 
  }
  if (langText21) {
    langText21.innerHTML = `Asociatia Wings of Hope oferă copiilor defavorizați șansa de a explora natura prin drumeții & tabere de scurta si lunga durata (3-15 zile), datorită fiecărei donații. Aceste experiențe îi învață că lumea nu este un loc rău și că efortul duce la recompense frumoase—exact ca atingerea unei priveliști uimitoare după o urcare pe vârful unui munte. Fiecare contribuție îi ajută să-și deschidă ochii către noi posibilități. <br>  (Nu este întotdeauna vorba despre lipsa hranei. Trebuie să își hrănească și inimile și mințile.)`; 
  }
  
  if (langText22) {
    langText22.innerHTML = 'Arată mai putin'; 
  }
  if (langText23) {
    langText23.innerHTML = `Zboruri cu Parapanta <br> (in tandem)`; 
  }
  if (langText24) {
    langText24.innerHTML = `Detaliază`; 
  }

  if (langText25) {
    langText25.innerHTML = `Zboruri cu Parapanta <br> (în tandem)`; 
  }
  if (langText26) {
    langText26.innerHTML = `Asociatia Wings of Hope oferă copiilor defavorizați șansa de a experimenta zborul cu parapantă în tandem cu instructori certificați, datorită fiecărei donații. Acest lucru îi învață că ceea ce pare înfricoșător sau prea mare la început poate deveni simplu odată ce îndrăznesc să exploreze. Sprijinul dumneavoastră îi ajută pe copii să îmbrățișeze curiozitatea și să își depășească temerile, zbor după zbor. <br> (Nu este întotdeauna vorba despre lipsa hranei. Trebuie să își hrănească și inimile și mințile)`; 
  }
  if (langText27) {
    langText27.innerHTML = 'Arată mai puțin'; 
  }
  if (langText28) {
    langText28.innerHTML = "Donații"; 
  }
  if (langText29) {
    langText29.innerHTML = `Bunătatea dumneavoastră poate schimba viitorul unui copil. Fiecare donație face o diferență!`; 
  }
    
  if (langText30) {
    langText30.innerHTML = 'Cum ne poți sprijini?'; 
  }
  if (langText31) {
    langText31.innerHTML = `Este simplu. Poți dona prin oricare dintre următoarele opțiuni: `; 
  }
  if (langText32) {
    langText32.innerHTML = `<strong class="colorStrong">Formularul 220:</strong> Direcționează către noi 3.5% din impozitul pe venit (0 costuri pentru tine).`; 
  }
  if (langText33) {
    langText33.innerHTML = `<strong class="colorStrong">Transfer Bancar:</strong> Una dintre cele mai rapide și ușoare modalități de a dona.`; 
  }
  if (langText34) {
    langText34.innerHTML = `<strong class="colorStrong">CEC:</strong> Unii preferă să scrie lucrurile. Este întotdeauna o plăcere și o surpriză.`; 
  }
  if (langText35) {
    langText35.innerHTML = 'Formularul 230'; 
  }
  if (langText36) {
    langText36.innerHTML = 'Transfer Bancar'; 
  }
  if (langText37) {
    langText37.innerHTML = 'Prin companie'; 
  }
  if (langText38) {
    langText38.innerHTML = 'Formularul 220 - 3,5%'; 
  }
  
  if (langText39) {
    langText39.innerHTML = 'Redirecționează 3,5% din impozitul tău pe venit.'; 
  }
  
  if (langText40) {
    langText40.innerHTML = 'De ce să redirecționezi?'; 
  }
  if (langText41) {
    langText41.innerHTML = 'Dacă ești salariat, ai posibilitatea de a redirecționa 3,5% din impozitul  tău pe venit către proiectele noastre. Acest lucru nu implică costuri  suplimentare pentru tine, ci doar direcționarea unei părți din bugetul de  stat către o cauză pe care o susții.'; 
  }
  if (langText42) {
    langText42.innerHTML = 'Impozitul redirecționat nu este o sponsorizare sau o donație, ci o opțiune  legală prin care poți sprijini o fundație, o asociație sau o entitate non-profit ca a noastră.'; 
  }
  if (langText43) {
    langText43.innerHTML = `Singura acțiune pe care trebuie să o faci este sa urmezi un singur pas de mai jos ca să completezi <strong>formularul 230</strong>.`; 
  }
  if (langText44) {
    langText44.innerHTML = 'Cum să redirecționezi 3,5% din impozitul pe venit?'; 
  }
  if (langText45) {
    langText45.innerHTML = 'Pasul 1: Descarcă formularul'; 
  }
  if (langText46) {
    langText46.innerHTML = `Formularul necesar este <strong class="colorStrong">Declarația 230</strong>, care poate fi completat doar de persoanele ale căror venituri provin exclusiv din salarii.`; 
  }
  if (langText47) {
    langText47.innerHTML = 'Poți descărca formularul completat cu datele noastre de AICI'; 
  }
  if (langText47_2) {
    langText47.innerHTML = 'Descarcă FORMULARUL 230 - 3,5%'; 
  }
  if (langText48) {
    langText48.innerHTML = 'Dacă preferi să completezi declarația direct la Administrația Financiară sau să o descarci de pe site-ul ANAF, trebuie să completezi manual datele noastre:'; 
  }
  if (langText49) {
    langText49.innerHTML = `<strong class="colorStrong">Denumire entitate nonprofit:</strong> Asociația Wings of Hope. <br> <strong class="colorStrong">Cod de identificare fiscală:</strong> 27735535 <br> <strong class="colorStrong">Cont bancar (IBAN):</strong> RO15RNCB0088119857540001 (RON)`; 
  }
  
  if (langText50) {
    langText50.innerHTML = 'Pasul 2: Completează formularul'; 
  }
  if (langText51) {
    langText51.innerHTML = 'După ce ai descărcat formularul, completează-l cu datele tale de identificare, la secțiunea destinata contribuabilului.'; 
  }
  if (langText52) {
    langText52.innerHTML = 'Pasul 3: Semnează și trimite formularul'; 
  }
  if (langText53) {
    langText53.innerHTML = 'Formularul completat și semnat trebuie depus până la data de 25 mai la Administrația Financiară de care aparți cu domiciliul.'; 
  }
  if (langText54) {
    langText54.innerHTML = 'Cum poți depune formularul?'; 
  }
  if (langText55) {
    langText55.innerHTML = "Este simplu. Alegi oricare din urmatoarele optiuni:"; 
  }
  if (langText56) {
    langText56.innerHTML = 'A. Personal la ghișeul ANAF'; 
  }
  if (langText57) {
    langText57.innerHTML = 'B. Prin poștă'; 
  }
  if (langText58) {
    langText58.innerHTML = 'Dacă nu ai timp să mergi personal, poți trimite formularul prin poștă, solicitând confirmare de primire.'; 
  }
  if (langText59) {
    langText59.innerHTML = 'Tariful perceput de Poșta Română pentru acest serviciu este de aproximativ 6,30 lei pentru un plic de până la 20g.'; 
  }
  
  if (langText60) {
    langText60.innerHTML = `Nu știi care este adresa ANAF de care aparți? Găsești aici un <a href="https://static.anaf.ro/static/10/Anaf/AsistentaContribuabili_r/telefoane_judete/Regiuni.htm">link către lista cu Adrese ANAF</a>.`; 
  }
  if (langText61) {
    langText61.innerHTML = 'C. Online'; 
  }
  if (langText62) {
    langText62.innerHTML = 'Dacă ai semnătură digitală, poți completa online declarația pe site-ul ANAF.'; 
  }
  if (langText63) {
    langText63.innerHTML = 'Dacă nu ai semnătură digitală, poți crea un cont de utilizator pe site-ul ANAF.'; 
  }
  if (langText64) {
    langText64.innerHTML = 'D. Depunere prin împuternicire'; 
  }
  if (langText65) {
    langText65.innerHTML =  "Dacă locuiești în București sau într-un alt județ,  poți solicita prin e-mail (blue42wings@yahoo.ca) o cerere de  împuternicire, iar un reprezentant al nostru va depune  formularul în locul tău."; 
  }
  if (langText66) {
    langText66.innerHTML = "Prin Transfer Bancar"; 
  }
  if (langText67) {
    langText67.innerHTML = "Susține orice program al Asociatiei Wings of Hope care îți prezintă vreun interes."; 
  }
  if (langText68) {
    langText68.innerHTML = "Datele necesare pentru transferul bancar:"; 
  }
  if (langText69) {
    langText69.innerHTML = "Cod IBAN."; 
  }
  
  if (langText70) {
    langText70.innerHTML = "Cod IBAN."; 
  }
  if (langText71) {
    langText71.innerHTML = "Simplu & Rapid"; 
  }

  // Voluntariat 72-76

  if (langText77) {
    langText77.innerHTML = "Cum poți ajuta mai mult?"; 
  }
  if (langText78) {
    langText78.innerHTML = `<strong>Distribuie informația:</strong> Povestește-le prietenilor despre posibilitatea de a redirecționa 3,5% din impozitul pe venit.`; 
  }
  if (langText79) {
    langText79.innerHTML = `<strong >Promovează cauza pe rețele sociale:</strong> Share-uiește acest mesaj pe Facebook, Twitter, LinkedIn, etc.`; 
  }
  if (langText80) {
    langText80.innerHTML = "Despre Noi"; 
  }
  if (langText81) {
    langText81.innerHTML = `Asociatia <strong class="text-secondary">Wings of Hope</strong> este dedicată in sprijinirea copiilor defavorizati, oferindu-le acces la educație, siguranță și oportunități pentru un viitor mai bun. Prin programe de suport, mentorat, voluntariat și donații, construim împreună o lume mai echitabilă. Implică-te și ajută-ne să schimbăm destine!`; 
  }
  if (langText82) {
    langText82.innerHTML = "Așteptăm cu drag să cooperam!"; 
  }
  if (langText83) {
    langText83.innerHTML = "Donatiile companiilor"; 
  }
  if (langText84) {
    langText84.innerHTML = `<strong class="colorStrong">Devino partenerul nostru!</strong> Descoperă cum se poate implica compania ta în susținerea programelor Wings of Hope`; 
  }
  if (langText85) {
    langText85.innerHTML = "Asociația noastră oferă o gamă largă de servicii de suport destinate să ajute copiii, familiile acestora și comunitățile din care fac parte. Contribuția companiei dumneavoastră poate preveni lipsurile de finanțare atunci când proiectele de amploare trebuie inițiate, iar sprijinul dumneavoastră poate avea un impact real prin sponsorizarea unei părți esențiale a inițiativei."; 
  }
  if (langText86) {
    langText86.innerHTML = "Redirecționează 20% din impozitul pe venit al companiei tale."; 
  }
  if (langText87) {
    langText87.innerHTML = "Companiile pot sprijini misiunea noastră redirecționând 20% din impozitul lor pe venit, ajutând la finanțarea programelor care beneficiază copiii — fără a suporta costuri suplimentare pentru compania sponsorizatoare.";
  }
  if (langText88) {
    langText88.innerHTML = "Sponsorizările sunt integral deductibile din impozitul pe venit al companiei, sub condiția să se încadreze în limitele legale și să fie realizate înainte de sfârșitul anului printr-un acord de sponsorizare.";
  }
  if (langText89) {
    langText89.innerHTML = "Promovează 3.5% printre angajați";
  }
  if (langText90) {
    langText90.innerHTML = "Angajații dumneavoastră au opțiunea de a redirecționa 3.5% din impozitul pe venit către proiectele noastre. Aceasta nu implică niciun cost suplimentar pentru dumneavoastră sau pentru ei, doar redirecționarea unei părți din bugetul de stat către o cauză pe care o susțineți.";
  }
  if (langText91) {
    langText91.innerHTML = `Oferim ghidaj detaliat despre cum pot redirecționa 3.5% din impozitul lor pe venit către proiectele noastre prin secțiunea <strong class="colorStrong"><a href="http://127.0.0.1:5500/frontend/index.html#donations" onclick="window.location.reload(); return false;">Formularul 230</a></strong>`;
  }
  if (langText92) {
    langText92.innerHTML = `Cum să redirecționezi 3.5% din impozitul pe venit? <br> (Simplificat prin Online)`; 
  }
  if (langText93) {
    langText93.innerHTML = "1 Singur Pas: Accesează formularul și completează-l online"; 
  }
  if (langText94) {
    langText94.innerHTML = `Poți accesa & completa formularul cu datele tale AICI <div class="badge bg-primary p-2 text-uppercase text-dark f230ro-lansare f230ro-buton">   <strong> <i class="fa-brands fa-wpforms"></i> &nbsp; Formular Online 230 - 3.5%  &nbsp; <i class="fa-brands fa-wpforms"></i> </strong>  </div>.`; 
  }
  
});




// expend the ativities xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const buttons = [
  { buttonId: 'button1', initialId: 'activity1_initial', accessedId: 'activity1_accesat', cardSize: 'activity1', text_opacity: 'activities_moreText1' },
  { buttonId: 'button2', initialId: 'activity2_initial', accessedId: 'activity2_accesat', cardSize: 'activity2', text_opacity: 'activities_moreText2' },
  { buttonId: 'button3', initialId: 'activity3_initial', accessedId: 'activity3_accesat', cardSize: 'activity3', text_opacity: 'activities_moreText3' },
  { buttonId: 'button1_return', initialId: 'activity1_initial', accessedId: 'activity1_accesat', cardSize: 'activity1', text_opacity: 'activities_moreText1' },
  { buttonId: 'button2_return', initialId: 'activity2_initial', accessedId: 'activity2_accesat', cardSize: 'activity2', text_opacity: 'activities_moreText2' },
  { buttonId: 'button3_return', initialId: 'activity3_initial', accessedId: 'activity3_accesat', cardSize: 'activity3', text_opacity: 'activities_moreText3' }
];

buttons.forEach(buttonConfig => {
  const button = document.getElementById(buttonConfig.buttonId);
  const initialElement = document.getElementById(buttonConfig.initialId);
  const accessedElement = document.getElementById(buttonConfig.accessedId);
  const cardSizeElement = document.querySelector('.' + buttonConfig.cardSize);
  const text_opacityElement = document.getElementById(buttonConfig.text_opacity);

  button.addEventListener('click', function() {
      const isActive = initialElement.style.display === 'flex';

      // First, reset all buttons' elements
      buttons.forEach(otherConfig => {
          const otherInitial = document.getElementById(otherConfig.initialId);
          const otherAccessed = document.getElementById(otherConfig.accessedId);
          const otherCardSize = document.querySelector('.' + otherConfig.cardSize);
          const otherTextOpacity = document.getElementById(otherConfig.text_opacity);

          otherInitial.style.display = 'flex';
          otherAccessed.style.display = 'none';
          otherCardSize.style.height = '120px';
          otherTextOpacity.style.opacity = '0';
      });

      // Apply changes to the clicked button
      if (isActive) {
          initialElement.style.display = 'none';
          accessedElement.style.display = 'flex';
          cardSizeElement.style.height = '400px';
          text_opacityElement.style.opacity = '1';
          text_opacityElement.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)';
      }
  });
});








// Donation Tabs xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
document.addEventListener('DOMContentLoaded', function () {
  // Get references to the buttons
  const btn230 = document.getElementById('btn_230');
  const btnBank = document.getElementById('btn_bank');
  const btnVolunteer = document.getElementById('btn_volunteer');

  // Get references to the sections
  const formSection = document.getElementById('formSection');
  const bankTransferSection = document.getElementById('bankTransferSection');
  const volunteerSection = document.getElementById('volunteerSection');

  // Array of all buttons for easier management
  const buttons = [btn230, btnBank, btnVolunteer];

  // Function to show a specific section and hide the others
  function showSection(sectionToShow, activeButton) {
    // Hide all sections
    formSection.style.display = 'none';
    bankTransferSection.style.display = 'none';
    volunteerSection.style.display = 'none';

    // Remove .active class from all buttons
    buttons.forEach(button => button.classList.remove('active'));

    // Show the selected section
    sectionToShow.style.display = 'block';

    // Add .active class to the clicked button
    activeButton.classList.add('active');
  }

  // Add event listeners to the buttons
  btn230.addEventListener('click', function () {
    showSection(formSection, btn230);
  });

  btnBank.addEventListener('click', function () {
    showSection(bankTransferSection, btnBank);
  });

  btnVolunteer.addEventListener('click', function () {
    showSection(volunteerSection, btnVolunteer);
  });

  // Optionally, set a default section and button to be active on page load
  showSection(formSection, btn230); // For example, show the "230 Form" section and activate its button by default
});