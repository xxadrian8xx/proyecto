package iesvdm.adrian.proyecto.repository;

import iesvdm.adrian.proyecto.domain.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    @Query(value = "select U from Usuario U where U.usuario like %:usuario% and U.password like %:password%")
    public List<Usuario> findByUsuarioAndPassword(@Param("usuario")String usuario, @Param("password")String password);

    @Query(value = "select U from Usuario U inner join Equipo E on U.equipo = E.id where E.id like %:idEquipo%", nativeQuery = true)
    public List<Usuario> findByUsuarioEnEquipo(@Param("idEquipo")Long id);

}
