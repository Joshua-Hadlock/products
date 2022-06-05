const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];

storeItems.forEach((item) => {
  
    if(item.inStock === true){
      $('#store').append(`<div class="inStock"><p class="first">$${item.price}</p> <p class="second">${item.name}</p> <p class="third">${item.details}</div>`);
    };
  });

let check = true;
$("#clickMe").click(function()
{ 
  
  
  if (check === true){
  $('#contentContainer').addClass('darkMode');
  $('.inStock').addClass('darkModeItem');
  $('#clickMe').addClass('toggleDark');
  $('.randomLine').addClass('randomDark');
    check = false;
  } else {
    $('#contentContainer').removeClass('darkMode');
    $('.inStock').removeClass('darkModeItem');
    $('#clickMe').removeClass('toggleDark');
    $('.randomLine').removeClass('randomDark');
    check = true;
  }
});
