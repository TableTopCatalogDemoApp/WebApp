import Link from 'next/link'

function fullClassNames(title, activeTitle) {
    return [
        "nav-link",
        title.toLowerCase() == activeTitle.toLowerCase() ? "active" : ""
    ].join(' ');
}

export default function MenuItem({ url, title, activeTitle }) {
    return (
        <Link href={ url }>
            <li className="nav-item">
                <a className={ fullClassNames(title, activeTitle) }>
                    { title }
                </a>
            </li>
        </Link>
    )
}