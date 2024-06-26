import gql from 'graphql-tag';

export const FIND_INCIDENT = gql`
  query FindIncident($query: IncidentQueryInput) {
    incident(query: $query) {
      incident_id
      title
      description
      editors {
        userId
        first_name
        last_name
      }
      date
      AllegedDeployerOfAISystem {
        entity_id
        name
      }
      AllegedDeveloperOfAISystem {
        entity_id
        name
      }
      AllegedHarmedOrNearlyHarmedParties {
        entity_id
        name
      }
      nlp_similar_incidents {
        incident_id
        similarity
      }
      editor_similar_incidents
      editor_dissimilar_incidents
      flagged_dissimilar_incidents
      reports {
        report_number
      }
      embedding {
        from_reports
        vector
      }
      editor_notes
    }
  }
`;

export const FIND_INCIDENTS_TABLE = gql`
  query FindIncidents($query: IncidentQueryInput) {
    incidents(query: $query, limit: 999) {
      incident_id
      title
      description
      editors {
        userId
        first_name
        last_name
      }
      date
      AllegedDeployerOfAISystem {
        entity_id
        name
      }
      AllegedDeveloperOfAISystem {
        entity_id
        name
      }
      AllegedHarmedOrNearlyHarmedParties {
        entity_id
        name
      }
      reports {
        report_number
      }
    }
  }
`;

export const FIND_INCIDENT_ENTITIES = gql`
  query FindIncident($query: IncidentQueryInput) {
    incident(query: $query) {
      incident_id
      AllegedDeployerOfAISystem {
        entity_id
        name
      }
      AllegedDeveloperOfAISystem {
        entity_id
        name
      }
      AllegedHarmedOrNearlyHarmedParties {
        entity_id
        name
      }
    }
  }
`;

export const FIND_INCIDENTS = gql`
  query FindIncidents($query: IncidentQueryInput) {
    incidents(query: $query, limit: 999) {
      incident_id
      title
      description
      editors {
        userId
        first_name
        last_name
      }
      date
      AllegedDeployerOfAISystem {
        entity_id
        name
      }
      AllegedDeveloperOfAISystem {
        entity_id
        name
      }
      AllegedHarmedOrNearlyHarmedParties {
        entity_id
        name
      }
      nlp_similar_incidents {
        incident_id
        similarity
      }
      editor_similar_incidents
      editor_dissimilar_incidents
      flagged_dissimilar_incidents
      reports {
        report_number
      }
      embedding {
        from_reports
        vector
      }
    }
  }
`;

export const FIND_INCIDENTS_TITLE = gql`
  query FindIncidentsTitles($query: IncidentQueryInput) {
    incidents(query: $query, limit: 999) {
      incident_id
      title
    }
  }
`;

export const UPDATE_INCIDENT = gql`
  mutation UpdateIncident($query: IncidentQueryInput!, $set: IncidentUpdateInput!) {
    updateOneIncident(query: $query, set: $set) {
      incident_id
      title
      description
      editors {
        userId
        first_name
        last_name
      }
      date
      AllegedDeployerOfAISystem {
        entity_id
        name
      }
      AllegedDeveloperOfAISystem {
        entity_id
        name
      }
      AllegedHarmedOrNearlyHarmedParties {
        entity_id
        name
      }
      nlp_similar_incidents {
        incident_id
        similarity
      }
      editor_similar_incidents
      editor_dissimilar_incidents
      flagged_dissimilar_incidents
      reports {
        report_number
      }
      embedding {
        from_reports
        vector
      }
      editor_notes
    }
  }
`;

export const UPDATE_INCIDENTS = gql`
  mutation UpdateIncidents($query: IncidentQueryInput!, $set: IncidentUpdateInput!) {
    updateManyIncidents(query: $query, set: $set) {
      matchedCount
      modifiedCount
    }
  }
`;

export const INSERT_INCIDENT = gql`
  mutation InsertIncident($incident: IncidentInsertInput!) {
    insertOneIncident(data: $incident) {
      incident_id
    }
  }
`;

export const GET_LATEST_INCIDENT_ID = gql`
  query FindIncidents {
    incidents(sortBy: INCIDENT_ID_DESC, limit: 1) {
      incident_id
    }
  }
`;

export const FIND_FULL_INCIDENT = gql`
  query FindIncident($query: IncidentQueryInput) {
    incident(query: $query) {
      incident_id
      title
      description
      editors {
        userId
        first_name
        last_name
      }
      date
      AllegedDeployerOfAISystem {
        entity_id
        name
      }
      AllegedDeveloperOfAISystem {
        entity_id
        name
      }
      AllegedHarmedOrNearlyHarmedParties {
        entity_id
        name
      }
      nlp_similar_incidents {
        incident_id
        similarity
      }
      editor_similar_incidents
      editor_dissimilar_incidents
      flagged_dissimilar_incidents
      reports {
        submitters
        date_published
        report_number
        title
        description
        url
        image_url
        cloudinary_id
        source_domain
        text
        authors
        epoch_date_submitted
        language
        tags
        inputs_outputs
      }
      embedding {
        from_reports
        vector
      }
      editor_notes
      epoch_date_modified
      tsne {
        x
        y
      }
    }
  }
`;

export const LOG_INCIDENT_HISTORY = gql`
  mutation logIncidentHistory($input: History_incidentInsertInput!) {
    logIncidentHistory(input: $input) {
      incident_id
    }
  }
`;

export const FIND_INCIDENT_HISTORY = gql`
  query FindIncidentHistory($query: History_incidentQueryInput) {
    history_incidents(query: $query, sortBy: EPOCH_DATE_MODIFIED_DESC) {
      incident_id
      AllegedDeployerOfAISystem
      AllegedDeveloperOfAISystem
      AllegedHarmedOrNearlyHarmedParties
      _id
      date
      description
      modifiedBy
      editor_dissimilar_incidents
      editor_notes
      editor_similar_incidents
      editors
      embedding {
        from_reports
        vector
      }
      epoch_date_modified
      flagged_dissimilar_incidents
      nlp_similar_incidents {
        incident_id
        similarity
      }
      reports
      title
      tsne {
        x
        y
      }
    }
  }
`;
