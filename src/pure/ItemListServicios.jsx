import { Link, ListItem } from "@chakra-ui/react"

export const ItemListServicios = ({ href, child }) => {
    return (
        <ListItem py={4}><Link fontWeight='normal' color='#000' pl={2} fontSize='sm' href={href}
            _hover={{
                transform: 'scale(1.5)'
            }}
        >
            {child}</Link>
        </ListItem>
    )
}