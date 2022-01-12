import { DropdownUL, DropdownLink } from './dropdown.style'
import { dropdownData } from './dropdownData'

const Dropdown = () => {
    return (
        <DropdownUL>
            {dropdownData.map(item => (
                <DropdownLink
                    key={item.id}
                    to={item.path}
                >
                    {item.title}
                </DropdownLink>
            ))}
        </DropdownUL>
    )
}

export default Dropdown
