import React from "react";
import {
  Box,
  Typography,
  Button,
  Checkbox,
  TextField,
  FormField,
  Banner,
  Form,
  DataGrid,
} from "@ideagen/helix-plus-ui-lib";
import { Edit } from "@mui/icons-material";
import "./ManageTenant.css";
import AppHeader from "./shared/AppHeader";
import { Grid } from "@mui/material";

export default function ManageTenant() {
  const [type, setType] = React.useState(true);
  const [enabled, setEnabled] = React.useState(true);
  const [isEdit, setIsEdit] = React.useState(false);
  const [ee, eee] = React.useState(null);
  return (
    <Box className="manage-tenant-main-layout">
      <AppHeader isEdit={isEdit} />
      <Box className="manage-tenant-body">
        <Box>
          <span
            style={{
              background: "#e4e5e7",
              padding: "10px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
            onClick={() => setType(!type)}
          >
            {type ? "Internal" : "External"}
          </span>
        </Box>
        <Box className="manage-tenant-edit-block">
          <Button
            theme="secondary"
            label="Edit"
            icon={<Edit style={{ width: "15px", color: "red" }} />}
            dataId="edit-btn"
            style={{ fontSize: "12px" }}
            iconPosition="left"
            onClick={() => setIsEdit(!isEdit)}
          />
        </Box>
        <Box>
          {!isEdit ? (
            <>
              <Box className="manage-tenant-card">
                <Box className="manage-tenant-card-body1">
                  <Typography variant="body1">
                    Authentication Detials
                  </Typography>
                </Box>
                <Box className="manage-tenant-card-caption">
                  <Typography variant="caption">Authentication Type</Typography>
                </Box>
                <Box className="manage-tenant-card-list-block">
                  <Typography
                    variant="caption"
                    className="manage-tenant-card-list-caption"
                  >
                    &bull;{" "}
                    <span className="manage-tenant-card-list-text">
                      {type ? "Internal" : "External"}
                    </span>
                  </Typography>
                </Box>
                {!type && (
                  <>
                    <Box style={{ margin: "20px 10px" }}>
                      <Box
                        style={{
                          display: "flex",
                          marginTop: "15px",
                        }}
                      >
                        <Box style={{ flex: 1 }}>
                          <Box>
                            <Typography
                              variant="caption"
                              style={{ fontWeight: 600 }}
                            >
                              Client id
                            </Typography>
                          </Box>
                          <Box style={{ marginTop: "5px" }}>
                            <Typography variant="caption">
                              {" "}
                              0oafc2q1aLShhuuk94x6
                            </Typography>
                          </Box>
                        </Box>
                        <Box style={{ flex: 1 }}>
                          <Box>
                            <Typography
                              variant="caption"
                              style={{ fontWeight: 600 }}
                            >
                              Client Secret
                            </Typography>
                          </Box>
                          <Box style={{ marginTop: "5px" }}>
                            <Typography variant="caption">
                              *************************
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          marginTop: "15px",
                        }}
                      >
                        <Box style={{ flex: 1 }}>
                          <Box>
                            <Typography
                              variant="caption"
                              style={{ fontWeight: 600 }}
                            >
                              Metadata endpoint
                            </Typography>
                          </Box>
                          <Box style={{ marginTop: "5px" }}>
                            <Typography variant="caption">
                              {" "}
                              https://dev-528100.okta.com/well-known/openid-configuration
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          marginTop: "15px",
                        }}
                      >
                        <Box style={{ flex: 1 }}>
                          <Box>
                            <Typography
                              variant="caption"
                              style={{ fontWeight: 600 }}
                            >
                              UserId Claim
                            </Typography>
                          </Box>
                          <Box style={{ marginTop: "5px" }}>
                            <Typography variant="caption"> Sub</Typography>
                          </Box>
                        </Box>
                        <Box style={{ flex: 1 }}>
                          <Box>
                            <Typography
                              variant="caption"
                              style={{ fontWeight: 600 }}
                            >
                              Scope
                            </Typography>
                          </Box>
                          <Box style={{ marginTop: "5px" }}>
                            <Typography variant="caption">openid</Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          marginTop: "15px",
                        }}
                      >
                        <Box style={{ flex: 1 }}>
                          <Box>
                            <Typography
                              variant="caption"
                              style={{ fontWeight: 600 }}
                            >
                              External login label
                            </Typography>
                          </Box>
                          <Box style={{ marginTop: "5px" }}>
                            <Typography variant="caption">
                              {" "}
                              External Login (OKTA)
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      className="manage-tenant-card-body1"
                      style={{ marginTop: "10px" }}
                    >
                      <Typography variant="body1">
                        Automatic provisioning
                      </Typography>
                    </Box>
                    <Box style={{ margin: "0px 10px" }}>
                      <Box className="manage-tenant-card-body1">
                        <Typography variant="caption">
                          Automatic Provisioning
                        </Typography>
                      </Box>
                      <Box>
                        <Button
                          onClick={() => setEnabled(!enabled)}
                          theme="secondary"
                          label={enabled ? "DISABLED" : "ENABLED"}
                          dataId="disabled-btn"
                          size="small"
                          style={{
                            fontSize: "11px",
                            background: !enabled ? "#1b838b" : "#DDE0E3",
                            fontWeight: 700,
                            color: !enabled ? "#fff" : "#000",
                          }}
                        />
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
              <Box className="manage-tenant-card">
                <Box className="manage-tenant-card-body1">
                  <Typography variant="body1">User Data Migration</Typography>
                </Box>
                <Box className="manage-tenant-card-caption">
                  <Box className="manage-tenant-text-block">
                    <Box>
                      <Typography variant="caption">
                        Migrate all existing users data to the newly
                        configurated authentication setting
                      </Typography>
                    </Box>
                    <Box className="manage-tenant-migrate-btn-block">
                      <Button
                        label="Migrate users"
                        dataId="migrate-btn"
                        style={{ fontSize: "12px", fontWeight: 600 }}
                        size="small"
                      />
                    </Box>
                  </Box>
                  <Box className="manage-tenant-last-seen">
                    <Box>
                      <Typography variant="caption">
                        Last migration: 05 Aug 2021 11:06
                      </Typography>
                    </Box>
                    <Box className="manage-tenant-view-summary">
                      <Button
                        label="View summary"
                        dataId="summary-btn"
                        variant="text"
                        style={{ fontSize: "11px" }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </>
          ) : (
            <>
              <Box className="manage-tenant-card">
                <Box className="manage-tenant-card-body1">
                  <Typography variant="body1">
                    Authentication Detials
                  </Typography>
                </Box>
                <Box className="manage-tenant-card-caption">
                  <Form dataId="edit-authetication-form">
                    <Box>
                      <Typography variant="caption">
                        Choose authentication type{" "}
                        <span style={{ color: "#E22D38" }}>*</span>
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="caption"
                        style={{ color: "#5D6977" }}
                      >
                        At least one authentication type must be selected
                      </Typography>
                    </Box>
                    <Box style={{ marginTop: "15px" }}>
                      <Box style={{ marginTop: "10px" }}>
                        <Checkbox
                          dataId="internal"
                          label="Internal"
                          checked={true}
                        />
                      </Box>
                      <Box style={{ marginTop: "10px" }}>
                        <Checkbox
                          dataId="external"
                          label="External"
                          checked={true}
                        />
                      </Box>
                    </Box>
                    <Box style={{ marginTop: "25px" }}>
                      <Banner
                        style={{ border: "1px solid #E7AF22", padding: "20px" }}
                        dataId="checkbox-banner"
                        message="Make sure all fields below are filled in correctly in order to prevent any login issues."
                        type="warning"
                      />
                    </Box>
                    <Box>
                      <Box style={{ display: "flex", marginTop: "25px" }}>
                        <Box style={{ flex: 1, padding: "10px 14px" }}>
                          <TextField
                            type="text"
                            id="client-id-field"
                            dataId="client-id-field"
                            placeholder="Client ID"
                            label="Client ID"
                            onChange={() => {}}
                            required
                          />
                        </Box>
                        <Box style={{ flex: 1, padding: "10px 14px" }}>
                          <TextField
                            type="text"
                            id="client-secret-field"
                            dataId="client-secret-field"
                            placeholder="Client Secret"
                            label="Client Secret"
                            onChange={() => {}}
                            required
                          />
                        </Box>
                      </Box>
                      <Box style={{}}>
                        <Box style={{ flex: 1, padding: "10px 14px" }}>
                          <TextField
                            type="text"
                            id="client-id-field"
                            dataId="client-id-field"
                            placeholder="Metadata endpoint"
                            label="Metadata endpoint"
                            onChange={() => {}}
                            required
                          />
                        </Box>
                      </Box>
                      <Box style={{}}>
                        <Box style={{ flex: 1, padding: "10px 14px" }}>
                          <TextField
                            type="text"
                            id="client-id-field"
                            dataId="client-id-field"
                            placeholder="Metadata endpoint"
                            label="Issuer"
                            onChange={() => {}}
                            required
                          />
                        </Box>
                      </Box>{" "}
                      <Box style={{ display: "flex" }}>
                        <Box style={{ flex: 1, padding: "10px 14px" }}>
                          <TextField
                            type="text"
                            id="client-id-field"
                            dataId="client-id-field"
                            placeholder="sub"
                            label="UserID claim"
                            onChange={() => {}}
                            required
                          />
                        </Box>
                        <Box style={{ flex: 1, padding: "10px 14px" }}>
                          <TextField
                            type="text"
                            id="client-secret-field"
                            dataId="client-secret-field"
                            placeholder="openid"
                            label="Scope"
                            onChange={() => {}}
                            required
                          />
                        </Box>
                      </Box>
                      <Box style={{ display: "flex" }}>
                        <Box style={{ flex: 1, padding: "10px 14px" }}>
                          <TextField
                            type="text"
                            id="client-id-field"
                            dataId="client-id-field"
                            placeholder="Login with Okta"
                            label="External login label"
                            onChange={(e: any) => {eee(e)}}
                            required
                            value={ee}
                            showClearWhenNotActive={!false}
                          />
                        </Box>
                      </Box>
                    </Box>
                    <Box className="manage-tenant-card-body1">
                      <Typography variant="body1">
                        Automatic Provisioning{" "}
                      </Typography>
                    </Box>
                  </Form>
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}
