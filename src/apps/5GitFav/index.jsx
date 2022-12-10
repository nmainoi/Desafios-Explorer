import {
    Container,
    Box,
    Header,
    InputWrapper,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    NoData
} from "./style";
import { GitFavLogo } from "../../assets/icons";
import { StartIcon, LogoGitFav } from './assets/icons'
import { useState, useEffect } from "react";
import { api } from "./api";
export const GitFav = () => {
    const localStorageList = localStorage.getItem('@listUsers')
    const [user, setUser] = useState('');

    const [listUsers, setListUsers] = useState(localStorageList?.length > 0 ? JSON.parse(localStorageList) : []);

    const handleAddUser = () => {

        api.get(user).then((response) => {
            const { name, login, avatar_url, public_repos, followers } = response.data;
            setListUsers(prev => [...prev, { name, login, avatar_url, public_repos, followers }])
        }).catch((error) => {
            console.log(error);
        })

    }
    const handleRemoveUser = (position) => {
        setListUsers(prev => prev.filter((item, index) => position !== index))
    }




    useEffect(() => {

        localStorage.setItem('@listUsers', JSON.stringify(listUsers));
    }, [listUsers])
    return (
        <Container>
            <Box>
                <Header>
                    <GitFavLogo />
                    <InputWrapper>

                        <input
                            type="text"
                            placeholder="Digite o nome do usuário"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <button onClick={handleAddUser} type="submit"><StartIcon />Favoritar</button>
                    </InputWrapper>

                </Header>
                <Table>
                    <TableHeader>
                        <span className="users">Usuários</span>
                        <span className="repo">Repositories</span>
                        <span className="follow">Followers</span>
                        <span className="action">Ação</span>
                    </TableHeader>
                    <TableBody>
                        {listUsers.length <= 0 ?
                            <NoData><LogoGitFav /><h1>Nenhum favorito ainda</h1></NoData>
                            :
                            listUsers.map(({ name, login, avatar_url, public_repos, followers }, index) => (

                                <TableRow key={index}>
                                    <div className="rowUser">
                                        <img src={avatar_url} />
                                        <div>
                                            <strong>{name}</strong>
                                            <span>{login}</span>
                                        </div>
                                    </div>
                                    <div className="rowRepo">{public_repos}</div>
                                    <div className="rowFollow">{followers}</div>
                                    <div className="rowAction">
                                        <button onClick={() => handleRemoveUser(index)}>
                                            Remover
                                        </button>
                                    </div>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>

            </Box>
        </Container>
    );
}