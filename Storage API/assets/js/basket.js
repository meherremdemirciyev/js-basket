function GetItems() {
    let basket = JSON.parse(localStorage.getItem('products'));

    if(basket.length === 0) {
        document.getElementById('empty').classList.remove('d-none')
        document.getElementById('btn_delete').style.display = 'none'
    }
    else{
        document.querySelector('.table').classList.remove('d-none')
        document.querySelector('.total').classList.remove('d-none');
        let html = '';
        let price = 0;
        for(let item of basket) {
            html += `
                <tr>
                    <th scope="row">${item.Id}</th>
                    <td style="width:20%">
                        <img src=${item.Image} alt="">
                    </td>
                    <td>${item.Name}</td>
                    <td>
                    <input type="number" value=${item.Count}>
                    </td>
                    <td>${Number(item.Price.slice(0,-4))*Number(item.Count)} AZN</td>
                </tr>
            `
            price+=Number(item.Price.slice(0,-4))*Number(item.Count);
            }
    
        document.querySelector('.table tbody').innerHTML = html;
        document.getElementById('pr').innerHTML = price;
    }
}

GetItems();

document.getElementById('btn_delete').onclick = function(){
    localStorage.removeItem('products')
    location.reload();
}