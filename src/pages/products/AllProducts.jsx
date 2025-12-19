import { useState, useEffect } from 'react';
import data from '../../../data/data.json';
import { ProductCard } from '../../components/ProductCard';
import { useTitle } from '../../hooks/useTitle';
import { Funnel, ArrowDownUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

export const AllProducts = () => {
    useTitle('Products - NiKE')
    const allProducts = data.products
    const { state } = useLocation()
    const [openSort, setOpenSort] = useState(false)
    const [sortValue, setSortValue] = useState('Relevance')
    const handleSort = (item) => {
        setSortValue(item)
        setOpenSort(false)
    }

    const [openFilter, setOpenFilter] = useState(false)
    const handleFilter = () => {
        setOpenFilter(!openFilter)
    }


    const [products, setProducts] = useState([])
    const [allColors, setAllColors] = useState([])
    const [color, setColor] = useState('')
    const handleColor = (color) => {
        setColor(color)
    }

    useEffect(() => {
        switch (state.title) {
            case "Men":
                setProducts(allProducts.filter(obj => obj.gender == 'Men'))
                break;
            case "Women":
                setProducts(allProducts.filter(obj => obj.gender == 'Women'))
                break;
            case "New & Featured":
                const copy = [...allProducts];
                for (let i = copy.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [copy[i], copy[j]] = [copy[j], copy[i]];
                }
                setProducts(copy.slice(0, 12))
                break;
            case "Sale":
                setProducts(allProducts.filter(obj => obj.sale))
                break;
            default:
        }

        window.scrollTo(0, 0)
    }, [state.title])

    useEffect(() => {
        const uniqueColors = [
            ...new Set(
                products.flatMap(product => product.color)
            )
        ];
        setAllColors(uniqueColors);
    }, [products])

    return (
        <div className="allproducts container">
            <div className={`filter-menu ${openFilter ? 'open' : 'close'}`}>
                <div className="backdrop" onClick={() => setOpenFilter(false)}></div>
                <div className="filter">
                    <div className="filter-top">
                        <div className="section-title">Filter</div>
                        <X onClick={() => handleFilter()} />
                    </div>

                    <div className="filter-options">
                        <div className="option-title">Select Color:</div>
                        <div className="option color">
                            {
                                allColors.map((item, index) => (
                                    <div className="color-item"
                                        key={index}
                                        style={{ '--option-color': item }}
                                        onClick={() => handleColor(item)}
                                    >
                                        <label htmlFor={`${item}`}>
                                            {color == item ? 'x' : ''}
                                        </label>
                                        <input type="radio" name='color' id={`${item}`} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="options">
                {/* <div className="item" onClick={() => handleFilter()}>
                    <Funnel /> filter by,
                </div> */}
                <div className="section-title">{state.title} <span>({products.length})</span></div>
                <div className="item" onClick={() => setOpenSort(!openSort)}>
                    <ArrowDownUp /> Sort By, <span>{sortValue}</span>

                    <div className={`dropdown ${openSort ? 'open' : 'close'}`}>
                        <ul>
                            <li className={sortValue == 'Relevance' ? 'active-sort' : ''} onClick={() => handleSort('Relevance')}>Relevance</li>
                            <li className={sortValue == 'Newest' ? 'active-sort' : ''} onClick={() => handleSort('Newest')}>Newest</li>
                            <li className={sortValue == 'Price: Low to High' ? 'active-sort' : ''} onClick={() => handleSort('Price: Low to High')}>Price: Low to High</li>
                            <li className={sortValue == 'Price: High to Low' ? 'active-sort' : ''} onClick={() => handleSort('Price: High to Low')}>Price: High to Low</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="product-group">
                {
                    products.map((item, index) => (
                        <ProductCard prod={item} key={index} />
                    ))
                }
            </div>
        </div>
    )
}
