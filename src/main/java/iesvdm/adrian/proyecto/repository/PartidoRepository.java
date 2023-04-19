package iesvdm.adrian.proyecto.repository;

import iesvdm.adrian.proyecto.domain.Partido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PartidoRepository extends JpaRepository<Partido, Long> {
}
