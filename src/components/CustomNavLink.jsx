import { NavLink, useLocation } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const CustomNavLink = ({ to, children, onClick }) => {

    const location = useLocation();

    const currentPath = location.pathname;

    return (
        <Link
            as={NavLink}
            to={to}
            color={currentPath == to ? 'brand.primary' : 'brand.secondary'}
            mr={{ base: '2vw', md: "2vw", lg: "4vw"}}
            _hover={{ textDecoration: "underline" }}
            style={{
                textDecoration: "none",
            }}
            onClick={onClick}
        >
            {children}
        </Link>
    );
};

export default CustomNavLink;
