const naira = document.getElementById('naira');
naira.addEventListener("input", nairaConverter);

function nairaConverter(e){
        console.log(naira);
        let nairaC = e.target.value;
        document.getElementById('dollars').value = nairaC / 493;
        document.getElementById('pounds').value = nairaC / 710;
        document.getElementById('Euro').value = nairaC / 595;
       // document.getElementById('dollars').value = nairaC / 493;
}
