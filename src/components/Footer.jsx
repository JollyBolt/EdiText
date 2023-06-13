import React from 'react'

export default function Footer() {
    return (
        <div className="container fixed-bottom">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        EdiText
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
                </ul>
            </footer>
        </div>
    )
}
