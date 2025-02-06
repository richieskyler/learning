$('input').on('blur', () => {
    console.log
    if(!$(this).val().includes('@')){
        $(this).addClass('invalid');
    }
})
