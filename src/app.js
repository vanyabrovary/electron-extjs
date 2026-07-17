Ext.onReady(function () {

    // Store для телефонов
    var phonesStore = Ext.create('Ext.data.Store', {
        fields: ['id', 'phone', 'name'],
        proxy: { type: 'memory' }
    });

    // Store для адресов
    var addressesStore = Ext.create('Ext.data.Store', {
        fields: ['id', 'address', 'name'],
        proxy: { type: 'memory' }
    });

    // Загрузка данных адресов через роутер в Store
    window.electronAPI.request('addresses.index').then(function (res) {
        if (res.success) addressesStore.loadData(res.data);
    });

    // Загрузка данных телепонов через роутер в Store
    window.electronAPI.request('phones.index').then(function (res) {
        if (res.success) phonesStore.loadData(res.data);
    });


    // Отображение телепонов
    Ext.create('Ext.grid.Panel', {
        title: 'Телефоны',
        store: phonesStore,
        columns: [
            { text: 'Телефон', dataIndex: 'phone', flex: 1 },
            { text: 'ФИО', dataIndex: 'name', flex: 2 }
        ],
        renderTo: Ext.getBody(),
        width: 600,
        height: 200,
        style: { marginBottom: '20px' }
    });

    // Отображение адресов
    Ext.create('Ext.grid.Panel', {
        title: 'Адреса',
        store: addressesStore,
        columns: [
            { text: 'Адрес', dataIndex: 'address', flex: 2 },
            { text: 'ФИО', dataIndex: 'name', flex: 1 }
        ],
        renderTo: Ext.getBody(),
        width: 600,
        height: 200
    });

});