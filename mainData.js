var mainData = {
  showTags: true, //خيار لتظهر أو تخفي الtags
  name: "Muhammed Ali Jarkas", //اسم الموقع بيطلع بعنوان التاب وببداية الموقع
  black_favIcon: "./assets/favicon_black.png", //  الصورة اللي بتطلع جنب عنوان التاب لما يكون الوضع النهاري مفعل
  white_favicon: "./assets/favicon_white.png", // صورة الفافيكون البيضا بتطلع لما بكون الوضع الليلي مفعل
  title: "Cybersecurity Enthusiast", //لقبك الوظيفي بيطلع جنب عنون التاب
  email: "alijarkas0@gmail.com", //إيميلك
  phone: "+963956914619", //رقمك هون
};

var links = [
  { name: "facebook", link: "https://www.facebook.com/ali.jarkas/" }, // غير الرابط برابط حساباتك
  { name: "whatsapp", link: "https://wa.me/" + mainData.phone }, // هون ما تغير شي ،بس تغير فوق تلقائيا هون بيتغير
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/muhammed-ali-jarkas/",
  }, //بتقدر تضيف روابط كمان بس بتضيف سطر جديد بالشكل الموجود هون
];
