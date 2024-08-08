import React, { useEffect, useState } from "react";
import { SelectItem } from "../../../types";
import './_UserSelect.scss';

type Props = {
    selectList: Array<SelectItem>;
    selectedValue?: SelectItem | undefined | null;
};

const UserSelect = ({ selectList, selectedValue }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchString, setSearchString] = useState('');

    const startSelectedValue = selectedValue ?? 
        selectList[0] ?? 
        { id: -1, option: 'Список пуст' } as SelectItem;

    const [selectedItem, setSelectedItem] = useState(startSelectedValue);

    useEffect(() => {
        return () => {
            document.removeEventListener('click', closeSelect);
        }
    }, []);

    const selectListFiltred: Array<SelectItem> = searchString 
    ? selectList.filter(item => 
        (item.option).toLowerCase().startsWith(searchString.toLowerCase())
    )
    : selectList;

    function closeSelect() {
        setIsOpen(false);

        setSearchString('');
        document.removeEventListener('click', closeSelect);
    }

    function openSelect(e: React.MouseEvent<HTMLElement>) {
        e.stopPropagation();

        setIsOpen(true);
        document.addEventListener('click', closeSelect);
    }

    function searchItems(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchString(e.target.value);
    }

    function selectItem(e: React.MouseEvent<HTMLElement>) {
        const item = e.target as HTMLElement;

        if (item.classList.contains('UserSelect__input--list__item')) {
            setSelectedItem({ 
                id: item.getAttribute('value') ?? '', 
                option: item.innerText,
            });
        }
    }

    return (
        selectListFiltred ?
        <div className="UserSelect">
            <div className="UserSelect__input">
                <button onClick={openSelect}>
                    <span>{ selectedItem.option }</span>
                </button>
                <div className={ 
                    'UserSelect__input--list' + (isOpen ? ' open' : '')
                }>
                    <input 
                        type="text" 
                        className="UserSelect__input--search"
                        value={searchString} 
                        onInput={searchItems} 
                        onClick={(e) => e.stopPropagation()}
                        placeholder="Поиск"
                    />
                    <ul onClick={selectItem}>
                        {selectListFiltred.length 
                            ? selectListFiltred.map(item => 
                                <li 
                                    className="UserSelect__input--list__item" 
                                    value={ item.id }>{ item.option }
                                </li>
                            ) 
                            : <span onClick={(e) => e.stopPropagation()}>
                                Ничего не найдено
                            </span> 
                        }
                    </ul>
                    <input 
                        className="UserSelect__input--value" 
                        type="text" value={selectedItem.id}
                    />
                </div>
            </div>
        </div>
        : <div></div>
    );
};

export default UserSelect;