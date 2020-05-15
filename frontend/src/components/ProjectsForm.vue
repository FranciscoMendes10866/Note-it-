<template>
  <vs-col class="projectsDashboard">
    <!-- Content -->
    <vs-card id="margin-button-add" class="padG">
      <vs-tabs alignment="center">
        <!-- Projects List -->
        <vs-tab label="Projects">
          <!-- Data Insertion -->
          <CreateRecord
            placeholder="Project name"
            :value="newProjectName"
            @onInput="setNewProjectName"
            @create="createProject"
          />
          <vs-row
            v-for="project in projects"
            :key="project.id"
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-w="12"
            class="pad colsC grow"
          >
            <EditableRecord
              :isEditMode="project.isEditMode"
              :title="project.title"
              @onInput="setProjectTitle({
                project,
                title: $event,
              })"
              @onClick="projectClicked(project)"
              @onEdit="setEditMode(project)"
              @onSave="saveProject(project)"
              @onDelete="deleteProject(project)"
            />
          </vs-row>
        </vs-tab>
        <!-- Tasks List -->
        <vs-tab label="Tasks">
          <!-- Data Insertion -->
          <CreateRecord
            placeholder="Task name"
            @onInput="setNewTaskName"
            :value="newTaskName"
            @create="createTask"
          />
          <vs-row
            v-for="task in tasks"
            :key="task.id"
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-w="12"
            class="pad colsC grow"
          >
            <EditableRecord
              :isEditMode="task.isEditMode"
              :title="task.description"
              @onInput="setTaskDescription({
                task,
                description: $event,
              })"
              @onEdit="setEditMode(task)"
              @onSave="saveTask(task)"
              @onDelete="deleteTask(task)"
            />
          </vs-row>
        </vs-tab>
      </vs-tabs>
    </vs-card>
  </vs-col>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import CreateRecord from './CreateRecord'
import EditableRecord from './EditableRecord'

export default {
  mounted() {
    this.fetchProjects()
  },
    methods: {
      projectClicked(project) {
      this.setCurrentProject(project);
      this.fetchTasksForProject(project);
    },
        ...mapMutations('projects', [
      'setNewProjectName',
      'setEditMode',
      'setProjectTitle',
      'setCurrentProject'
    ]),
    ...mapActions('projects', [
      'createProject',
      'fetchProjects',
      'saveProject',
      'deleteProject',
    ]),
    ...mapActions('tasks', [
      'createTask',
      'deleteTask',
      'saveTask',
      'fetchTasksForProject',
    ]),
    ...mapMutations('tasks', [
      'setNewTaskName',
      'setTaskDescription',
      'setEditMode',
    ])
    },
  computed: {
    ...mapState('projects', [
      'newProjectName',
      'projects',
    ]),
    ...mapState('tasks', [
      'tasks',
      'newTaskName',
    ]),
  },
  components: {
    CreateRecord,
    EditableRecord,
  }
}
</script>

<style>
.mag-war {
  margin-left: 20px;
}
.mag-del {
  margin-left: 20px;
}
.pad {
  margin-top: 10px;
  margin-bottom: 10px;
}
.padG {
  padding: 5px;
}
.colsC {
  background: rgb(250, 250, 250);
  padding: 5px;
  border-radius: 4px;
}
.grow { 
  transition: all .2s ease-in-out;
   }
.grow:hover { 
  transform: scale(1.03); 
  box-shadow: 3px 3px 15px 2px rgb(233, 233, 233); 
  }
#margin-button-add {
  margin-top: 50px;
}
</style>