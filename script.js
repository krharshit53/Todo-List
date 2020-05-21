let btnAdd=$('#btnAdd');
let btnClear=$('#btnClear');
let btnReset=$('#btnReset');
let btnSort=$('#btnSort');
let  newTask=$('#newTask');
let  ulTask=$('#ulTask');


function addItem()
{
    let listItem=$('<li>',{
          'class':'list-group-item',
           text:newTask.val()
      })
      ulTask.append(listItem);
      newTask.val('');
      toggleInputBtn();
};
function sortItem()
{
    $('#ulTask .done').appentTo(ulTask);
}
function resetItem()
{
    newTask.val('')
    toggleInputBtn()

}
function clearItem()
{
    ulTask.empty();
    toggleInputBtn();
}
function toggleInputBtn()
{
    
    btnReset.prop('disabled',newTask.val()=='')
    btnAdd.prop('disabled',newTask.val()=='')
    btnClear.prop('disabled',ulTask.children().length<1)
    btnSort.prop('disabled',ulTask.children().length<1)
    
}
newTask.on('input',toggleInputBtn)

newTask.keypress(function(e)
{
    if(e.which==13)
    addItem();
})
btnAdd.click(addItem)

btnReset.click(resetItem)

btnSort.click(sortItem)
btnClear.click(clearItem)
