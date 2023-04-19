package iesvdm.adrian.proyecto.service;

import iesvdm.adrian.proyecto.domain.Equipo;
import iesvdm.adrian.proyecto.repository.EquipoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EquipoService {
    private final EquipoRepository equipoRepository;

    public EquipoService(EquipoRepository equipoRepository) {
        this.equipoRepository = equipoRepository;
    }

    public List<Equipo> all() {
        return this.equipoRepository.findAll();
    }

    public Equipo save(Equipo product) {
        return this.equipoRepository.save(product);
    }

    public Optional<Equipo> one(Long id) {
        return this.equipoRepository.findById(id);
    }

    public Optional<Equipo> replace(Long id, Equipo equipo) {
        return this.equipoRepository.findById(id).map(p -> (id.equals(equipo.getId())  ?
                this.equipoRepository.save(equipo) : null));
    }

    public void delete(Long id) {
        this.equipoRepository.findById(id).map(p -> {this.equipoRepository.delete(p);
            return p;});
    }
}
