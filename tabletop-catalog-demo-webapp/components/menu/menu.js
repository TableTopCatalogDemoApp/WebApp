import MenuItem from './menu-item'

export default function Menu({ activeTitle }) {
    return (
        <ul className="nav nav-tabs">
            <MenuItem url="/" title="Home" activeTitle={ activeTitle }>
            </MenuItem>
            <MenuItem url="/games/all" title="Games" activeTitle={ activeTitle }>
            </MenuItem>
            <MenuItem url="/persons/all" title="Persons" activeTitle={ activeTitle }>
            </MenuItem>
            <MenuItem url="/publishers/all" title="Publishers" activeTitle={ activeTitle }>
            </MenuItem>
        </ul>
    );
}