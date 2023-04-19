package iesvdm.adrian.proyecto.service;

import iesvdm.adrian.proyecto.domain.Torneo;
import iesvdm.adrian.proyecto.domain.Usuario;
import iesvdm.adrian.proyecto.repository.TorneoRepository;
import iesvdm.adrian.proyecto.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TorneoService {
    private final TorneoRepository torneoRepository;

    public TorneoService(TorneoRepository torneoRepository) {
        this.torneoRepository = torneoRepository;
    }

    public List<Torneo> all() {
        return this.torneoRepository.findAll();
    }

    public Torneo save(Torneo product) {
        return this.torneoRepository.save(product);
    }

    public Optional<Torneo> one(Long id) {
        return this.torneoRepository.findById(id);
    }

    public Optional<Torneo> replace(Long id, Torneo torneo) {

        return this.torneoRepository.findById(id).map( p -> (id.equals(torneo.getId())  ?
                this.torneoRepository.save(torneo) : null));

    }

    public void delete(Long id) {
        this.torneoRepository.findById(id).map(p -> {this.torneoRepository.delete(p);
            return p;});
    }
}
