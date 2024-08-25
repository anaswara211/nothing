// @font-face {
//     font-family: "Ndot";
//     src: url('./fonts/Ndot-55.otf');
// }
// @font-face{
//     font-family: "NType-Regular";
//     src:url('./fonts/NType82-Regular.otf')
// }
// @font-face{
//     font-family: "NType-Mono";
//     src:url('./fonts/NType82Mono-Regular.otf')
// }
// @font-face {
//     font-family: 'Ndot';
//     src: url('/assets/fonts/Ndot-Regular.woff2') format('woff2'),
//          url('/assets/fonts/Ndot-Regular.woff') format('woff');
//     font-weight: normal;
//     font-style: normal;
//   }
  
 
  module.exports = {
    theme: {
      extend: {
        padding: {
          '10px': '10px',
        }
      }
    }
  }



    // Toggle the mobile menu
    document.querySelector('button').addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.toggle('hidden');
        this.querySelector('svg:nth-child(1)').classList.toggle('hidden');
        this.querySelector('svg:nth-child(2)').classList.toggle('hidden');
    });

    // Toggle dropdown in the mobile menu
    function toggleDropdown(id) {
        const dropdown = document.getElementById(id);
        dropdown.classList.toggle('hidden');
    }
   