package iesvdm.adrian.proyecto.controller;

import iesvdm.adrian.proyecto.domain.Torneo;
import iesvdm.adrian.proyecto.service.TorneoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/torneos")
public class TorneoController {
    private final TorneoService torneoService;

    public TorneoController(TorneoService torneoService) {
        this.torneoService = torneoService;
    }

    @GetMapping(value = {"","/"})
    public List<Torneo> all() {
        return this.torneoService.all();
    }

    @PostMapping({"","/"})
    public Torneo newTorneo(@RequestBody Torneo torneo) {
        return this.torneoService.save(torneo);
    }

    @GetMapping("/{id}")
    public Optional<Torneo> one(@PathVariable("id") Long id) {
        return this.torneoService.one(id);
    }

    @PutMapping("/{id}")
    public Optional<Torneo> replaceProduct(@PathVariable("id") Long id, @RequestBody Torneo torneo) {
        return this.torneoService.replace(id, torneo);
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable("id") Long id) {
        this.torneoService.delete(id);
    }
}
