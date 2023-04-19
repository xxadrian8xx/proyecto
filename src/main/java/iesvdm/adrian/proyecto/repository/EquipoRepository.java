package iesvdm.adrian.proyecto.repository;

import iesvdm.adrian.proyecto.domain.Equipo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EquipoRepository extends JpaRepository<Equipo, Long> {
}
