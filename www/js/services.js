angular.module('starter.services', [])


.factory('Flowers', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var flowers = [{
    id: 0,
    name: 'Pâquerette',
    latinNameText: 'Bellis perenis',
    face: 'http://www.florihana.com/components/com_virtuemart/shop_image/product/photo-8-paquerette-et-coccinelle.jpg',
    tempInstruction : 'dfdfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
    lumInstruction: 'sdfjdsifdisdfjosdfijsdfijdsofisdfsifjjsdifjfjsodfjifsoidjsfjiiisoofjsjidfjsjfjiosfi',
    humInstruction : 'ddddddddddddddddddddddddddddddddddddddddddddddddddddddudfuidfisjofidsiojoij'
  }, {
    id: 1,
    name: 'Max Lynx',
    latinNameText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460',
    tempInstruction : 'dfdfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
    lumInstruction: 'sdfjdsifdisdfjosdfijsdfijdsofisdfsifjjsdifjfjsodfjifsoidjsfjiiisoofjsjidfjsjfjiosfi',
    humInstruction : 'ddddddddddddddddddddddddddddddddddddddddddddddddddddddudfuidfisjofidsiojoij'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    latinNameText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg',
    tempInstruction : 'dfdfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
    lumInstruction: 'sdfjdsifdisdfjosdfijsdfijdsofisdfsifjjsdifjfjsodfjifsoidjsfjiiisoofjsjidfjsjfjiosfi',
    humInstruction : 'ddddddddddddddddddddddddddddddddddddddddddddddddddddddudfuidfisjofidsiojoij'
  }, {
    id: 3,
    name: 'Perry Governor',
    latinNameText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg',
    tempInstruction : 'dfdfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
    lumInstruction: 'sdfjdsifdisdfjosdfijsdfijdsofisdfsifjjsdifjfjsodfjifsoidjsfjiiisoofjsjidfjsjfjiosfi',
    humInstruction : 'ddddddddddddddddddddddddddddddddddddddddddddddddddddddudfuidfisjofidsiojoij'
  }, {
    id: 4,
    name: 'Mike Harrington',
    latinNameText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png',
    tempInstruction : 'dfdfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
    lumInstruction: 'sdfjdsifdisdfjosdfijsdfijdsofisdfsifjjsdifjfjsodfjifsoidjsfjiiisoofjsjidfjsjfjiosfi',
    humInstruction : 'ddddddddddddddddddddddddddddddddddddddddddddddddddddddudfuidfisjofidsiojoij'
  }];

  return {
    all: function() {
      return flowers;
    },
    remove: function(flower) {
      flowers.splice(flowers.indexOf(flower), 1);
    },
    get: function(flowerId) {
      for (var i = 0; i < flowers.length; i++) {
        if (flowers[i].id === parseInt(flowerId)) {
          return flowers[i];
        }
      }
      return null;
    }
  };
});

/*.factory('Dashs', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var dashs = [{
    id: 0,
    name: 'Marguerite',
    latinNameText: 'Marguerita',
    face: 'http://www.hautemarne-nature.com/img-grd/IMG_1758.JPG',
    tempInstruction : '10°C',
    lumInstruction: '54',
    humInstruction : '45', 
    conseilTemp : 'sfdfjfjfdsfhfkdkfdkfdklsfldlflsflsdlfls',
    conseilLum : 'dfgggggggggggggfdgdfgdfgdf',
    conseilHum : 'gjfdgjfdgkdkgldfgkgkdglj'
  }];
  return {
    all: function() {
      return dashs;
    },
    remove: function(dash) {
      dashs.splice(dashs.indexOf(dash), 1);
    },
    get: function(dashId) {
      for (var i = 0; i < dashs.length; i++) {
        if (dashs[i].id === parseInt(dashId)) {
          return dashs[i];
        }
      }
      return null;
    }
  };
});*/