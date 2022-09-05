import {CgMenuGridO} from "react-icons/cg";
import {FaCar} from "react-icons/fa";
import {ImHome} from "react-icons/im";
import {TbPlugConnected, TbSofa} from "react-icons/tb";
import {IoBuild} from "react-icons/io5";
import {BsSun} from "react-icons/bs";
import {MdOutlineWork} from "react-icons/md";
import {IoIosBusiness} from "react-icons/io";

export  const arrItem = [
    {
        id: 1,
        title: 'Все',
        list: [{name: 'Транспорт', path: 'transport'}, {name: 'Недвижимость', path: 'estate'}, {name: 'Электроника', path: 'electronics'}],
        icon : <CgMenuGridO/>
    },
    {
        id: 2,
        title: 'Транспорт',
        list: [{name: 'Автомобили', path: 'category'}, {name: 'Запчасти', path: 'spare'}, {name: 'Шины', path: 'tires'}],
        icon : <FaCar/>

    },
    {
        id: 3,
        title: 'Недвижимость',
        list: [{name: 'Квартиры', path: 'flat'}, {name: 'Дома', path: 'house'}, {name: 'Участки', path: 'plot'}],
        icon :<ImHome/>
    },
    {
        id: 4,
        title: 'Электроника',

        list: [{name: 'Мобильные телефоны', path: 'phones'}, {name: 'Компьютеры, ноутбуки', path: 'computers'}, {name: 'Бытовая техника', path: 'technique'}],
        icon : <TbPlugConnected/>
    },
    {
        id: 5,
        title: 'Дом и сад',
        list: [{name: 'Мебель', path: 'furniture'}, {name: 'Ремонт и строительство', path: 'repair'}, {name: 'Все для дома и сада', path: 'garden'}],
        icon :<TbSofa/>
    },
    {
        id: 6,
        title: 'Услуги',
        list: [{name: 'Строительство и ремонт', path: 'build'}, {name: 'Автоуслуги', path: 'autoservice'}, {name: 'Красота и здоровье', path: 'beauty'}],
        icon : <IoBuild/>
    }, {
        id: 7,
        title: 'Отдых',
        list: [{name: 'Иссык-куль', path: 'issykkul'}, {name: 'Путешествие', path: 'travel'}, {name: 'Рестораны', path: 'restaurant'}],
        icon : <BsSun/>
    },
    {
        id: 8,
        title: 'Работа',
        list: [{name: 'Поиск сотрудников', path: 'employee'}, {name: 'Ищу работу', path: 'searchwork'}],
        icon : <MdOutlineWork/>
    },
    {
        id: 9,
        title: 'Для бизнеса',
        list: [{name: 'Торговое оборудование', path: 'shopequipment'}, {name: 'Для кафе, ресторанов', path: 'cafeandrestaurant'}, {name: 'Холодильное оборудование', path: 'Refrigerationequipment'}],
        icon : <IoIosBusiness/>
    },
    {
        id: 10,
        title: 'Животные',
        list: [{name: 'Торговое оборудование', path: 'shopequipment'}, {name: 'Для кафе, ресторанов', path: 'cafeandrestaurant'}, {name: 'Холодильное оборудование', path: 'Refrigerationequipment'}],
        icon : <IoIosBusiness/>
    }
]