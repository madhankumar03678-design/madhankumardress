function openCollection(name) {
    alert(name + " Collection clicked!");
    }let cart = [];

    function addToCart(name, price) {
      cart.push({ name, price });
      alert(name + " added to cart\nPrice: ₹" + price);
    }
    
    function buyNow(name, price) {
      alert("Order placed!\nItem: " + name + "\nAmount: ₹" + price);
    }
    